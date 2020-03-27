import React from "react"
import { ScheduledEvent } from "components/ScheduledEvent"
import { Heading } from "components"

export const EventList = ({ events, artists }) => (
  <div>
    <Heading size="large" bold>
      TODO: TOMORROW
    </Heading>

    {events.map((event) => {
      const eventArtists = (event.data.Artist || []).map(
        (artistRecordId) => artists[artistRecordId]
      )
      if (eventArtists.length === 0) {
        return null
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
