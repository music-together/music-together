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
        <Heading size="large" bold>
          Artists
        </Heading>
        {data.artists.edges.map(({ node }) => {
          if (!node || !node.data.Name) return null;
          return <ScheduledEvent key={node.recordId} artists={[node]} />
        })}
      </NarrowContainer>
    </Layout>
  )
}

export const sceneQuery = graphql`
  query {
    artists: allAirtable(
        sort: {fields: data___Name, order: ASC},
        filter: {
            table: { eq: "Artists" },
            data: { Final_Approval: {eq: true} }
        }
    ) {
      edges {
        node {
          id
          recordId
          data {
            Name
            Performer_Name
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
