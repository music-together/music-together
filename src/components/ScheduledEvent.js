import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "components"
import { format } from "date-fns"
import { WatchNowLink } from "./WatchNowLink"
import { hasShowStarted } from "../utilities/hasShowStarted"

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
  min-width: 100px;
  text-align: right;
`

const TimeText = styled(Text)`
  min-width: 100px;
`

const ArtistLink = styled(Link)`
  font-size: var(--font-size--large);
  margin-right: 8px;
`

const getArtistImageUrl = (artist) => {
  if ((artist.data.Press_Image || []).length === 0) {
    return null
  }

  if (artist.data.Press_Image[0].thumbnails && artist.data.Press_Image[0].thumbnails.large) {
    return artist.data.Press_Image[0].thumbnails.large.url
  }

  return null
}

export const ScheduledEvent = ({ event, artists }) => {
  if ((artists || []).length === 0) {
    return null
  }

  // artist
  const artist = artists[0]
  const artistImageAlt = artist.data.Name
  const artistImageUrl = getArtistImageUrl(artist)
  const watchNowUrl = artist.data.Stream_Link
  const genres = artists
    .filter((artist) => !!artist.data.Genre)
    .reduce((acc, artist) => [...acc, ...artist.data.Genre], [])
    .join(", ")

  // event
  const showTime = event ? new Date(event.data.Show_time) : null
  const isShowTime = event ? hasShowStarted(showTime) : null
  const formattedTime = event
    ? format(showTime, "K:mm a")
    : null

  return (
    <ScheduledEventContainer>
      {artistImageUrl && (
        <ArtistThumbnailContainer>
          <Thumbnail alt={artistImageAlt} src={artistImageUrl} />
        </ArtistThumbnailContainer>
      )}
      <ArtistContainer>
        {artists.map((artist) => (
          <ArtistLink key={artist.recordId} to={`/artist/${artist.recordId}`}>
            {artist.data.Band_or_Performer_Name || artist.data.Name}
          </ArtistLink>
        ))}
        <Text subdued>{genres}</Text>
      </ArtistContainer>

      {isShowTime && (
        <WatchNowLink href={watchNowUrl} showTime={showTime} />
      )}
      {!isShowTime && formattedTime && (
        <TimeContainer>
          <TimeText>{formattedTime}</TimeText>
        </TimeContainer>
      )}
    </ScheduledEventContainer>
  )
}
