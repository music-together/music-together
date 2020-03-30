import React from "react"
import { ScheduledEvent } from "components/ScheduledEvent"
import { Heading } from "components"
import { format, parse } from 'date-fns'
import groupEventsByDay, { DateKeyFormat } from "../utilities/groupEventsByDay"

export const EventList = ({ events, artists }) => {
  const groupedEvents = groupEventsByDay(events);

  return (
    <>
      {Array.from(groupedEvents.keys()).map(eventDateKey => {
        const eventsOnDate = groupedEvents.get(eventDateKey);
        const eventDate = parse(eventDateKey, DateKeyFormat, new Date());

        return (
          <div key={eventDateKey}>
            <Heading size="large" bold>
              {format(eventDate, 'eeee MMMM d')}
            </Heading>

            {eventsOnDate.map((event) => {
              if (!event.data.Show_time) return null

              const eventArtists = (event.data.Artist || [])
                .map((artistRecordId) => artists[artistRecordId])
                .filter((artist) => !!artist)
              if (eventArtists.length === 0) return null

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
      })
      }
    </>
  )
}
