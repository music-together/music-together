import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NarrowContainer } from "components/NarrowContainer"
import styled from "styled-components"
import { EventList, Button } from "components"
import groupEventsByDay from "utilities/groupEventsByDay"

const BottomSpacer = styled.div`
  height: 100px;
  width: 100%;
`

export default () => {
  const { scheduleResult, artistsResult } = useStaticQuery(graphql`
    query {
      scheduleResult: allAirtable(
        filter: { table: { eq: "Schedule" } }
        sort: { fields: data___Show_time, order: ASC }
      ) {
        edges {
          node {
            id
            recordId
            data {
              Artist
              Show_time
            }
          }
        }
      }

      artistsResult: allAirtable(filter: {
          table: { eq: "Artists" },
          data: { Final_Approval: {eq: true} }
      }) {
        edges {
          node {
            recordId
            data {
              # Artist info
              Name
              Genre
              Band_or_Performer_Name
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
              Stream_Link

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

  const events = scheduleResult.edges.map((edge) => edge.node)
  const artists = artistsResult.edges.reduce((acc, curr) => {
    acc[curr.node.recordId] = curr.node
    return acc
  }, {})

  // Only display events that happen on "next" day relative from cutoff
  const nextDaysEvents = groupEventsByDay(events).values().next().value;

  if (events.length == 0) {
    return (<></>);
  }

  return (
    <NarrowContainer>
      <EventList events={nextDaysEvents} artists={artists} />

      <Link to="/schedule">
        <Button>View all</Button>
      </Link>
      <BottomSpacer />
    </NarrowContainer>
  )
}
