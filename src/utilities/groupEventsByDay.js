import { format, isBefore, subHours } from "date-fns"

export const DateKeyFormat = 'yyyyMMdd';

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

    const dateKey = format(showTime, DateKeyFormat);
    const existing = grouped.get(dateKey) || [];
    grouped.set(dateKey, [...existing, event]);

    return grouped;
  }, new Map());
}

export default groupEventsByDay;
