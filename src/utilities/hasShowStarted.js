import { isBefore } from "date-fns"

export const hasShowStarted = (showTime) => {
  const now = new Date()

  // if scheduled showTime is before "now" then the show has started
  return isBefore(showTime, now)
}
