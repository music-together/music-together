import { isBefore, isAfter } from "date-fns"
import { getCutoffTime } from "./getCutoffTime"

export const hasShowStarted = (showTime) => {
  const now = new Date()
  const cutoffTime = getCutoffTime()

  // if scheduled showTime is before "now" then the show has started
  return isBefore(showTime, now) && isAfter(showTime, cutoffTime)
}
