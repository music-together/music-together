import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "components"
import { format } from 'date-fns'

const ScheduledEventContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: var(--spacing--tight);
  margin-bottom: var(--spacing--tight);
  align-items: center;
  justify-content: flex-start;
`

const ArtistThumbnailContainer = styled.div`
  flex-shrink: 0;
  margin-right: var(--spacing--tight);
  height: 100px;
  width: 100px;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ArtistContainer = styled.div`
  height: 100%;
  width: 100%;
`

const TimeContainer = styled.div`
  height: 100%;
  margin-left: auto;
  width: 100px;
  text-align: right;
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
    .filter(artist => !!artist.data.Genre)
    .reduce((acc, artist) => [...acc, ...artist.data.Genre], [])
    .join(", ")
  const formattedTime = event ? format(new Date(event.data.Show_time), 'K a') : null

  return (
    <ScheduledEventContainer>
      {artistImageUrl && (
        <ArtistThumbnailContainer>
          <Thumbnail alt={artistNames} src={artistImageUrl} />
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

      {formattedTime && (
        <TimeContainer>
          <Text>{formattedTime}</Text>
        </TimeContainer>
      )}
    </ScheduledEventContainer>
  )
}
