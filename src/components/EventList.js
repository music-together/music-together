import React from "react"
import { ScheduledEvent } from "components/ScheduledEvent"
import styled from "styled-components"

const EventListHeading = styled.h3`
  font-family: Arial;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.07em;
  margin-bottom: 24px;

  color: #ffffff;
  
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
`

export const EventList = ({ events, artists }) => (
  <div>
    <EventListHeading>TODO: TOMORROW</EventListHeading>

    {events.map((event) => {
      const eventArtists = (event.data.Artist || []).map(
        (artistRecordId) => artists[artistRecordId]
      )
      if (eventArtists.length === 0) {
        return null;
      }

      return (
        <ScheduledEvent
          key={event.recordId}
          artists={eventArtists}
          event={event}
        />
      )
    })}
  </div>
)
