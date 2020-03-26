import React from "react"
import { graphql } from "gatsby"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Header from "components/theme/Header"

export default ({ data }) => (
  <Layout>
    <SEO title={"test"} />
    <Header />
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  </Layout>
)

export const sceneQuery = graphql`
  query($recordId: String!) {
    airtable(table: { eq: "Artists" }, recordId: { eq: $recordId }) {
      data {
        Name
        Genre
        Email
        Phone
        Audience
        Bio
        COVID_19
        Cross_Promotion
        Disclaimer
        Facebook
        Instagram
        Location
        Online_Store
        Past_Gigs
        Performance_Type
        Postal_Code
        Press_Image {
          thumbnails {
            large {
              url
            }
          }
        }
        Representation
        Representation_Name
        Soundcloud
        Source_of_Income
        Spotify
        Test_Artist
        Time_slot
        Twitter
        Website
        Youtube
      }
    }
  }
`
