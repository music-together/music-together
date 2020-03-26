import React from 'react';
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

const ArtistTextView = styled.div`
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

const formatName = event => (event.Artist || defaultArtists).join(' + ');
const formatTime = () => "9pm"

export const ScheduledEvent = ({event, artists}) => {
  const  { artistName, genre, date, platform } = event;

  const time = formatTime(date || Date.now());

  return (
    <ScheduledEventContainer>
      <ArtistContainer>
        <ArtistTextView>{formatName(event)}</ArtistTextView>
        <GenreTextView>{genre}</GenreTextView>
      </ArtistContainer>
      <TimeContainer>
        <TimeTextView>{time}</TimeTextView>
        <PlatformTextView>{platform}</PlatformTextView>
      </TimeContainer>
    </ScheduledEventContainer>
  );
}

