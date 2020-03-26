import React from "react"
import { graphql } from "gatsby"
import { Button } from "components"
import Layout from "components/common/Layout"
import {NarrowContainer} from "components/NarrowContainer"
import {SocialLink} from 'components/SocialLink'
import SEO from "components/common/SEO"

export default ({ data }) => {
  const artist = data.artist.data;
  const schedule = data.schedule.edges
    .map(edge => edge.node)
    .filter(node => !!node.data.Show_time);

  return (
    <Layout>
      <SEO title={artist.Name} description={artist.Bio} />

      {/* TODO: All Artists link */}
      <NarrowContainer>
        <h1>{artist.Name}</h1>
        <p>{artist.Genre.join(', ')}</p>

        {(artist.Press_Image || []).map(pressImage => (
          <div key={pressImage.id}>
            <img alt={artist.Name} src={pressImage.thumbnails.large.url} />
          </div>
        ))}

        {(schedule.map(node => (
          <div key={node.id}>
            <h3>{new Date(node.data.Show_time).toLocaleString()}</h3>
            <div>
              <a href={node.data.Stream_Link}>{node.data.Stream_Name}</a>
            </div>
            <div>
              <Button>TODO: Add to Calendar</Button>
            </div>
          </div>
        )))}

        <div>
          {artist.Bio}
        </div>

        <div>
          <Button>TODO: Donate on Patreon</Button>
        </div>

        <div>
          <Button>TODO: Donate via Paypal</Button>
        </div>

        <div>
          <Button>TODO: Official Shop</Button>
        </div>

        <center>
          <SocialLink link={artist.Facebook} />
          <SocialLink link={artist.Instagram} />
          <SocialLink link={artist.Twitter} />
          <SocialLink link={artist.Spotify} type="spotify" />
          <SocialLink link={artist.Youtube} type="youtube" />
        </center>
      </NarrowContainer>
    </Layout>
  );
}


export const sceneQuery = graphql`
  query($recordId: String!) {
    schedule: allAirtable(filter: {table: {eq: "Schedule"}, data:{ Artist:{eq: $recordId}}}) {
      edges {
        node {
          id
          data {
            Artist
            Order
            Show_time
            Stream_Link
            Stream_Name
            Notes
          }
          recordId
        }
      }
    }
    artist: airtable(table: { eq: "Artists" }, recordId: { eq: $recordId }) {
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
          id
          thumbnails {
            large {
              url
            }
          }
        }
        Representation
        Representation_Name
        Soundcloud
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
