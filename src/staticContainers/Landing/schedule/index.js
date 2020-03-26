import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {NarrowContainer} from 'components/NarrowContainer'
import styled from "styled-components"
import {EventList} from "components/EventList"

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
  const { schedule, artists } = useStaticQuery(graphql`
    query {
      schedule: allAirtable(
        filter: { table: { eq: "Schedule" } }
      ) {
        edges {
          node {
            recordId
            data {
              Order
              Artist
              Show_time
              Notes
              Stream_Name
              Stream_Link
            }
          }
        }
      }

      artists: allAirtable(
        filter: { table: { eq: "Artists" } }
      ) {
        edges {
          node {
            recordId
            data {
              # Artist info
              Name
              Representation_Name
              Performance_Type
              Audience
              Email
              Phone
              COVID_19
              Bio

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
              Stream_Name
              Stream_Link
            }
          }
        }
      }
    }
  `)

  const newDate = new Date().toLocaleString()

  return (
    <NarrowContainer>
      <h1>Schedule</h1>

      <EventList events={schedule} artists={artists} />

      <LoadMoreButton onClick={() => console.error('load more!!!')}>Load more</LoadMoreButton>
      <BottomSpacer />
    </NarrowContainer>
  )
}

