import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

const ScheduledEventContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 24px;
  margin-bottom: 24px;
`

const ArtistContainer = styled.div`
  height: 100%;
  width: 100%;
`

const TimeContainer = styled.div`
  height: 100%;
  width: fit-content;
`

const ArtistTextView = styled(Link)`
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`

const GenreTextView = styled.div`
  color: white;
  opacity: 0.5;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`

const TimeTextView = styled.div`
  color: white;
  text-align: right;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`
const PlatformTextView = styled.div`
  color: white;
  opacity: 0.5;
  text-align: right;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`

const defaultArtists = ['No one']

const formatName = artistName => artistName
const formatTime = () => "9pm"

export const ScheduledEvent = ({event}) => {
  const  { artistName, genre, date, platform } = event || {};

  const time = formatTime(date || Date.now());
  const artists = event.Artist || defaultArtists

  return (
    <ScheduledEventContainer>
      <ArtistContainer>
        {artists.map(artist =>
          <ArtistTextView to={`/artist/${artist}`}>{formatName(artist)}</ArtistTextView>
        )}
        <GenreTextView>{genre}</GenreTextView>
      </ArtistContainer>
      <TimeContainer>
        <TimeTextView>{time}</TimeTextView>
        <PlatformTextView>{platform}</PlatformTextView>
      </TimeContainer>
    </ScheduledEventContainer>
  );
}

