import { subHours } from "date-fns"

export const getCutoffTime = () => {
  // events with showtime before this time will not be displayed
  return subHours(new Date(), 0.5);
}
