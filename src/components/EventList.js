import React, { useState, useEffect } from "react"
import { ScheduledEvent } from "components/ScheduledEvent"
import { Heading } from "components"
import { format, parse } from 'date-fns'
import groupEventsByDay, { DateKeyFormat } from "../utilities/groupEventsByDay"

const DayEvent = ({ artists, event }) => {
  if (!event.data.Show_time) return null

  const eventArtists = (event.data.Artist || [])
    .map((artistRecordId) => artists[artistRecordId])
    .filter((artist) => !!artist)

  if (eventArtists.length === 0) return null

  return (
    <ScheduledEvent
      key={Math.random()}
      artists={eventArtists}
      event={event}
    />
  )
}

const EventPerDayList = ({ artists, eventData }) => {
  const { eventsOnDate, eventDate } = eventData;

  return (
    <div key={eventDate}>
      <Heading size="large" bold>
        {format(eventDate, 'eeee MMMM d')}
      </Heading>
      {eventsOnDate.map((event) => { return (<DayEvent key={`${eventDate}_${event.recordId}`} artists={artists} event={event}/>) })}
    </div>
  )
}

export const EventList = ({ events, artists }) => {
  const groupedEvents = groupEventsByDay(events);
  const groupEventKeys = Array.from(groupedEvents.keys());

  const eventsData = [];
  for (var i = 0;i < groupEventKeys.length;i++) {
    const eventDateKey = groupEventKeys[i];
    const eventsOnDate = groupedEvents.get(eventDateKey);
    const eventDate = parse(eventDateKey, DateKeyFormat, new Date());
    eventsData.push({ eventDate, eventsOnDate });
  }

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const clientKey = isClient ? "client" : "server";

  return (
    <div key={clientKey}>
      {eventsData.map(eventData => { return (<EventPerDayList key={Math.random()} artists={artists} eventData={eventData}/>) })}
    </div>
  )
}
