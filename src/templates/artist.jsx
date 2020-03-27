import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { format } from "date-fns"
import { Button, Heading, Text } from "components"
import Layout from "components/common/Layout"
import { NarrowContainer } from "components/NarrowContainer"
import { SocialLink } from "components/SocialLink"
import SEO from "components/common/SEO"

const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing--tight) 0;
`

const EventsWrapper = styled.div`
  margin: var(--spacing--base) 0;

  & > * {
    margin-top: var(--spacing--base);
  }
`

const EventDetail = styled.div`
  margin-right: var(--spacing--xtight);
`

const ArtistInfo = styled.div`
  margin-bottom: var(--spacing--base);
`

const Time = styled.time`
  font-size: var(--font-size--xlarge);

  @media screen and (max-width: 500px) {
    font-size: var(--font-size--medium);
  }
`

const BioWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.8);
  padding: var(--spacing--base) 0;
`

export default ({ data }) => {
  const artist = data.artist.data
  const genres = artist.Genre || []
  const schedule = data.schedule.edges
    .map((edge) => edge.node)
    .filter((node) => !!node.data.Show_time)

  return (
    <Layout>
      <SEO title={artist.Name} description={artist.Bio} />

      <NarrowContainer>
        <ArtistInfo>
          <Heading size="xlarge">{artist.Name}</Heading>
          <Text subdued>{genres.join(", ")}</Text>
        </ArtistInfo>

        {(artist.Press_Image || []).map((pressImage) => (
          <div key={pressImage.id}>
            <img
              alt={artist.Name}
              height={pressImage.thumbnails.large.height}
              width={pressImage.thumbnails.large.width}
              src={pressImage.thumbnails.large.url}
            />
          </div>
        ))}

        <EventsWrapper>
          {schedule.map((node) => (
            <div key={node.id}>
              <Heading>
                {new Date(node.data.Show_time).toLocaleDateString(["en-CA"], {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </Heading>
              <Event>
                <EventDetail>
                  <Time>{format(new Date(node.data.Show_time), "K a")}</Time>
                </EventDetail>
                {node.data.Stream_link && (
                  <div>
                    <a
                      href={node.data.Stream_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>View stream</Button>
                    </a>
                  </div>
                )}
              </Event>
            </div>
          ))}
        </EventsWrapper>

        {artist.Bio && (
          <BioWrapper>
            <Text>{artist.Bio}</Text>
          </BioWrapper>
        )}

        <center>
          <SocialLink link={artist.Facebook} />
          <SocialLink link={artist.Instagram} />
          <SocialLink link={artist.Twitter} />
          <SocialLink link={artist.Spotify} type="spotify" />
          <SocialLink link={artist.Youtube} type="youtube" />
        </center>
      </NarrowContainer>
    </Layout>
  )
}

export const sceneQuery = graphql`
  query($recordId: String!) {
    schedule: allAirtable(
      filter: { table: { eq: "Schedule" }, data: { Artist: { eq: $recordId } } }
    ) {
      edges {
        node {
          id
          data {
            Artist
            Order
            Show_time
            Stream_Link
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
              height
              width
            }
          }
        }
        Representation
        Representation_Name
        Soundcloud
        Spotify
        Time_slot
        Twitter
        Website
        Youtube
      }
    }
  }
`
