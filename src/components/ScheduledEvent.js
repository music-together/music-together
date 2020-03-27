import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "components"

const ScheduledEventContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 24px;
  margin-bottom: 24px;
`

const ArtistThumbnailContainer = styled.div`
  margin-right: 12px;
  max-width: 106px;

  @media (max-width: 600px) {
    max-width: 42px;
  }
`

const ArtistContainer = styled.div`
  height: 100%;
  width: 100%;
`

const TimeContainer = styled.div`
  height: 100%;
  width: fit-content;
`

const ArtistLink = styled(Link)`
  font-size: var(--font-size--large);
  margin-right: 8px;
`

const defaultArtists = ["No one"]

const formatNames = (artists) => {
  let artistNames = artists.map((artist) => artist.data.Name)
  if (artistNames.length === 0) {
    artistNames = defaultArtists
  }
  return artistNames.join(" + ")
}

const getArtistImageUrl = (artists) => {
  if ((artists[0].data.Press_Image || []).length === 0) {
    return null
  }
  return artists[0].data.Press_Image[0].thumbnails.large.url
}

export const ScheduledEvent = ({ event, artists }) => {
  const artistNames = formatNames(artists)
  const artistImageUrl = getArtistImageUrl(artists)
  const genres = artists
    .reduce((acc, artist) => {
      if (artist.data.Genre == null) {
        return acc
      }

      return [...acc, ...artist.data.Genre]
    }, [])
    .join(", ")

  // const time = formatTime(date || Date.now());

  return (
    <ScheduledEventContainer>
      {artistImageUrl && (
        <ArtistThumbnailContainer>
          <img alt={artistNames} src={artistImageUrl} />
        </ArtistThumbnailContainer>
      )}
      <ArtistContainer>
        {artists.map((artist) => (
          <ArtistLink to={`/artist/${artist.recordId}`}>
            {artist.data.Name}
          </ArtistLink>
        ))}
        <Text subdued>{genres}</Text>
      </ArtistContainer>

      {event && (
        <TimeContainer>
          <Text>TODO</Text>
        </TimeContainer>
      )}
    </ScheduledEventContainer>
  )
}
