import React from "react"
import { ScheduledEvent } from "components/ScheduledEvent"
import { Heading } from "components"
import { format, subHours, isBefore, parse } from 'date-fns'

const dateKeyFormat = 'yyyyMMdd';

const groupEventsByDay = events => {
  // events with showtime before this time will not be displayed
  const cutoffTime = subHours(new Date(), 1);

  return events.reduce((grouped, event) => {
    if (!event.data.Show_time || (event.data.Artist || []).length === 0) {
      return grouped;
    }
    const showTime = new Date(event.data.Show_time);
    if (isBefore(showTime, cutoffTime)) {
      return grouped;
    }

    const dateKey = format(showTime, dateKeyFormat);
    const existing = grouped.get(dateKey) || [];
    grouped.set(dateKey, [...existing, event]);

    return grouped;
  }, new Map());
}

export const EventList = ({ events, artists }) => {
  const groupedEvents = groupEventsByDay(events);

  return (
    <>
      {Array.from(groupedEvents.keys()).map(eventDateKey => {
        const eventsOnDate = groupedEvents.get(eventDateKey);
        const eventDate = parse(eventDateKey, dateKeyFormat, new Date());

        return (
          <>
            <Heading size="large" bold>
              {format(eventDate, 'eeee MMMM d')}
            </Heading>

            {eventsOnDate.map((event) => {
              if (!event.data.Show_time) return null

              const eventArtists = (event.data.Artist || []).map(
                (artistRecordId) => artists[artistRecordId]
              )
              if (eventArtists.length === 0) return null

              return (
                <ScheduledEvent
                  key={event.recordId}
                  artists={eventArtists}
                  event={event}
                />
              )
            })}
          </>
        )
      })
      }
    </>
  )
}
