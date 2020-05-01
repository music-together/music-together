import { subMinutes } from "date-fns"

export const getCutoffTime = (minutes = 60) => {
  // events with showtime before this time will not be displayed
  return subMinutes(new Date(), minutes)
}
