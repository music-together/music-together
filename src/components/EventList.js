import React from "react"
import {ScheduledEvent} from "components/ScheduledEvent"

export const EventList = ({events, artists}) => {
  const artistMap = new Map()
  events = events.edges.map(({node: event}) => {

    return {
      id: event.recordId,
      ...event.data,
    }
  })

  events.forEach(event =>
    event.artists = (event.Artist || []).map(artistID => artistMap.get(artistID)),
  )

  console.log("Schedule:", events)
  console.log("Artists:", artists)
  console.log("ArtistMap:", artistMap)

  return (
    <div>
      {events.map((event) => (
        <ScheduledEvent
          key={event.id}
          artists={artists}
          event={event}
        />
      ))}
    </div>
  )
}


