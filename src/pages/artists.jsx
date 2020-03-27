import React from "react"
import { graphql } from "gatsby"
import { Heading } from "components"
import Layout from "components/common/Layout"
import { NarrowContainer } from "components/NarrowContainer"
import { ScheduledEvent } from "components"
import SEO from "components/common/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Arists" />

      <NarrowContainer>
        <Heading>Artists</Heading>
        {data.artists.edges.map(({ node }) => (
          <ScheduledEvent artists={[node]} />
        ))}
      </NarrowContainer>
    </Layout>
  )
}

export const sceneQuery = graphql`
  query {
    artists: allAirtable(filter: { table: { eq: "Artists" } }) {
      edges {
        node {
          id
          recordId
          data {
            Name
            Genre
            Press_Image {
              id
              thumbnails {
                large {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
