import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import ScheduledEvent from "./event"

const ScheduleContainer = styled.div`
  max-width: 686px;
  background-color: transparent;
  margin: 0 auto;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`

const LoadMoreButton = styled.button`
  height: 54px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  text-align: center;
`

const BottomSpacer = styled.div`
  height: 100px;
  width: 100%;
`

export default () => {
  const { schedule } = useStaticQuery(graphql`
    query {
      schedule: allAirtable(
        filter: { table: { eq: "Schedule" } }
      ) {
        edges {
          node {
            recordId
            data {
              Order
              Artist
              Show_time
              Notes
            }
          }
        }
      }
    }
  `)

  console.log("Schedule:", schedule)

  const newDate = new Date().toLocaleString()

  return (
    <ScheduleContainer>
      <h1>Schedule</h1>
      {schedule.edges.map(({ node: { data } }) => (
        <ScheduledEvent
          key={data.recordId}
          event={{
            artistName: "Emily King",
            genre: "Acoustic, soul",
            link: "https://www.youtube.com",
            platform: "YouTube",
            date: newDate,
          }}
        />
      ))}
      <LoadMoreButton onClick={() => console.error('load more!!!')}>Load more</LoadMoreButton>
      <BottomSpacer />
      {/* <CardScene key={data.recordId}> */}
      {/*   {data.Show_time} */}
      {/*   (<Link to={`artist/${data.Artist}`}>Artist</Link>) */}
      {/* </CardScene> */}
    </ScheduleContainer>
  )
}

// class Schedule extends React.Component {
//   constructor(props) {
//     super(props)

//     this.loadMoreEvents = this.loadMoreEvents.bind(this)
//     this.state = {
//       events: [],
//     }
//   }

//   componentDidMount() {
//     this.loadMoreEvents()
//   }

//   loadMoreEvents() {
//     // TODO: Replace with API call
//     const lastDate =
//       this.state.events.length > 0
//         ? this.state.events[this.state.events.length - 1].date
//         : null
//     const newDate = lastDate
//       ? new Date(lastDate.getTime() + 60 * 60 * 24 * 1000)
//       : new Date(Date.now())

//     const newEvents = [
//       {
//         artistName: "Emily King",
//         genre: "Acoustic, soul",
//         link: "https://www.youtube.com",
//         platform: "YouTube",
//         date: newDate,
//       },
//       {
//         artistName: "Dreamwarriors",
//         genre: "Hip Hop",
//         link: "https://www.facebook.com",
//         platform: "Facebook",
//         date: newDate,
//       },
//       {
//         artistName: "Pat Labarbera Trio",
//         genre: "Jazz",
//         link: "https://www.twitch.com",
//         platform: "Twitch",
//         date: newDate,
//       },
//     ]

//     this.setState((prevState) => ({
//       events: prevState.events.concat(newEvents),
//     }))
//   }

//   formattedDateString(d) {
//     const formatter = new Intl.DateTimeFormat("en", {
//       month: "long",
//       day: "2-digit",
//     })
//     const [{ value: mo }, , { value: da }] = formatter.formatToParts(d)
//     const date = [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ][new Date(Date.now()).getDay()]

//     return `${date} ${mo} ${da}`
//   }

//   generateEventsBucketedByDate() {
//     const { events } = this.state

//     const groupBy = function (dataArray, keyFunction) {
//       return dataArray.reduce(function (rv, x) {
//         const key = keyFunction(x.date)
//         ;(rv[key] = rv[key] || []).push(x)
//         return rv
//       }, {})
//     }

//     const dateKey = function (date) {
//       return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
//     }

//     const eventsKeyedByDate = groupBy(events, dateKey)
//     return events.length > 0 ? Object.values(eventsKeyedByDate) : []
//   }

//   render() {
//     const eventsBucketedByDate = this.generateEventsBucketedByDate()

//     return (
//       <ScheduleContainer>
//         {eventsBucketedByDate.map((eventsList) => (
//           <>
//             <DateTextView>
//               {this.formattedDateString(eventsList[0].date)}
//             </DateTextView>
//             {eventsList.map((event) => (
//               <ScheduledEvent event={event} />
//             ))}
//           </>
//         ))}
//         <LoadMoreButton onClick={this.loadMoreEvents}>Load more</LoadMoreButton>
//         <BottomSpacer />
//       </ScheduleContainer>
//     )
//   }
// }


