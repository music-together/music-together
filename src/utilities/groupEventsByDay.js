import { format, isBefore } from "date-fns"
import { getCutoffTime } from "./getCutoffTime"

export const DateKeyFormat = 'yyyyMMdd';

const groupEventsByDay = events => {
  const cutoffTime = getCutoffTime();

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
