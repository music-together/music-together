import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

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
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-right: 8px;
  
  @media (max-width: 600px) {
    font-size: 19px;
    line-height: 23px;
  }
`

const GenreTextView = styled.div`
  color: white;
  opacity: 0.8;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  
  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 15px;
  }
`

const TimeTextView = styled.div`
  color: white;
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  
  @media (max-width: 600px) {
    font-size: 19px;
    line-height: 23px;
  }
`

const defaultArtists = ['No one']

const formatNames = (artists) => {
  let artistNames = artists.map(artist => artist.data.Name);
  if (artistNames.length === 0) {
    artistNames = defaultArtists;
  }
  return artistNames.join(' + ')
}

const getArtistImageUrl = (artists) => {
  if ((artists[0].data.Press_Image || []).length === 0) {
    return null;
  }
  return artists[0].data.Press_Image[0].thumbnails.large.url;
}

export const ScheduledEvent = ({event, artists}) => {
  const artistNames = formatNames(artists);
  const artistImageUrl = getArtistImageUrl(artists);
  const genres = artists.reduce((acc, artist) => [...acc, ...artist.data.Genre], []).join(', ');

  // const time = formatTime(date || Date.now());

  return (
    <ScheduledEventContainer>
      {artistImageUrl &&
      <ArtistThumbnailContainer>
        <img alt={artistNames} src={artistImageUrl} />
      </ArtistThumbnailContainer>
      }
      <ArtistContainer>
        {artists.map(artist => <ArtistLink to={`/artist/${artist.recordId}`}>{artist.data.Name}</ArtistLink>)}
        <GenreTextView>{genres}</GenreTextView>
      </ArtistContainer>
      <TimeContainer>
        <TimeTextView>TODO</TimeTextView>
      </TimeContainer>
    </ScheduledEventContainer>
  );
}

