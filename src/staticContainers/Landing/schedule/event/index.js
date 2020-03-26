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

class ScheduledEvent extends React.Component {
  formatTime(date) {
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ampm;
    return strTime;
  }

  render() {
    const  { artistName, genre, date, platform } = this.props.event;
    const time = "9pm";//formatTime(this.props.date);

    return (
      <ScheduledEventContainer>
        <ArtistContainer>
          <ArtistTextView>{artistName}</ArtistTextView>
          <GenreTextView>{genre}</GenreTextView>
        </ArtistContainer>
        <TimeContainer>
          <TimeTextView>{time}</TimeTextView>
          <PlatformTextView>{platform}</PlatformTextView>
        </TimeContainer>
      </ScheduledEventContainer>
    );
  }
}

export default ScheduledEvent;
