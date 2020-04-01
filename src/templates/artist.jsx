import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { format } from "date-fns"
import {  Heading, Text } from "components"
import Layout from "components/common/Layout"
import { NarrowContainer } from "components/NarrowContainer"
import { SocialLink } from "components/SocialLink"
import SEO from "components/common/SEO"
import { WatchNowLink } from "../components"

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
      <SEO title={artist.Band_or_Performer_Name || artist.Name} description={artist.Bio} />

      <NarrowContainer>
        <ArtistInfo>
          <Heading size="xlarge">{artist.Band_or_Performer_Name || artist.Name}</Heading>
          <Text subdued>{genres.join(", ")}</Text>
        </ArtistInfo>

        {(artist.Press_Image || []).map((pressImage) => (
          <div key={pressImage.id}>
            {pressImage.thumbnails && <img
              alt={artist.Name}
              height={pressImage.thumbnails.large.height}
              width={pressImage.thumbnails.large.width}
              src={pressImage.thumbnails.large.url}
            />}
          </div>
        ))}

        <EventsWrapper>
          {schedule.map((node) => {
            const showTime = new Date(node.data.Show_time)

            return (
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
                    <Time>{format(showTime, "K a")}</Time>
                  </EventDetail>
                  <WatchNowLink
                    href={artist.Stream_Link}
                    showTime={showTime}
                  />
                </Event>
              </div>
            )
          })}
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
          <SocialLink link={artist.Website} type="website" />
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
      filter: { table: { eq: "Schedule" },
      data: { Artist: { eq: $recordId } } }
      sort: { fields: data___Show_time, order: ASC },
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
    artist: airtable(table: { eq: "Artists" }, recordId: { eq: $recordId }) {
      data {
        Name
        Band_or_Performer_Name
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
        Stream_Link
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
