import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { NarrowContainer } from "components/NarrowContainer"
import { EventList } from "components/EventList"
import Layout from "components/common/Layout"

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
              Sponsored
            }
          }
        }
      }

      artistsResult: allAirtable(
          filter: {
              table: { eq: "Artists" },
              data: { Final_Approval: {eq: true} }
          },
      ) {
        edges {
          node {
            recordId
            data {
              # Artist info
              Name
              Genre
              Performer_Name
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

  console.log("<DEBUG>");
  console.log(`events: ${JSON.stringify(events)}`);
  console.log("-------------");
  console.log(`artists: ${JSON.stringify(artists)}`);
  console.log("</DEBUG>");

  return (
    <Layout>
      <NarrowContainer>
        <EventList events={events} artists={artists} />
      </NarrowContainer>
    </Layout>
  )
}
