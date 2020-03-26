import React from "react"
import { graphql } from "gatsby"
import { Button } from "components"
import Layout from "components/common/Layout"
import {NarrowContainer} from "components/NarrowContainer"
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

        <ul>
          <SocialLinkItem link={artist.Facebook} name="Facebook" />
          <SocialLinkItem link={artist.Instagram} name="Instagram" />
          <SocialLinkItem link={artist.Twitter} name="Twitter" />
          <SocialLinkItem link={artist.Spotify} name="Spotify" />
          <SocialLinkItem link={artist.Youtube} name="Youtube" />
        </ul>
      </NarrowContainer>
    </Layout>
  );
}

const SocialLinkItem = ({link, name}) => {
  if (!link || !name) return null;

  return (
    <li><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></li>
  )
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
