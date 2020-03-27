import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { NarrowContainer } from "components/NarrowContainer"
import styled from "styled-components"
import { EventList } from "components/EventList"

const LoadMoreButton = styled.button`
  height: 54px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  text-align: center;
`

const BottomSpacer = styled.div`
  height: 100px;
  width: 100%;
`

export default () => {
  const { scheduleResult, artistsResult } = useStaticQuery(graphql`
    query {
      scheduleResult: allAirtable(filter: { table: { eq: "Schedule" } }) {
        edges {
          node {
            recordId
            data {
              Order
              Artist
              Show_time
              Notes
            }
          }
        }
      }

      artistsResult: allAirtable(filter: { table: { eq: "Artists" } }) {
        edges {
          node {
            recordId
            data {
              # Artist info
              Name
              Genre
              Representation_Name
              Performance_Type
              Audience
              Email
              Phone
              COVID_19
              Bio
              Press_Image {
                id
                thumbnails {
                  large {
                    url
                  }
                }
              }

              # Social
              Soundcloud
              Spotify
              Website
              Facebook
              Online_Store
              Instagram
              Twitter
              Youtube

              # Metadata
              Location
              Past_Gigs
              Notes
            }
          }
        }
      }
    }
  `)

  const schedule = scheduleResult.edges.map((edge) => edge.node)
  const artists = artistsResult.edges.reduce((acc, curr) => {
    acc[curr.node.recordId] = curr.node
    return acc
  }, {})

  return (
    <NarrowContainer>
      <EventList events={schedule} artists={artists} />

      <LoadMoreButton onClick={() => console.error('load more!!!')}>View all</LoadMoreButton>
      <BottomSpacer />
    </NarrowContainer>
  )
}
