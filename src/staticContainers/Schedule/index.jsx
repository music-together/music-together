import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "components/common/SEO"
import { Wrapper, Flex, CardScene } from "./styles"

export default () => {
  const { schedule } = useStaticQuery(graphql`
    query {
      schedule: allAirtable(
        filter: { table: { eq: "Schedule (test - Marlow)" } }
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

  return (
    <Wrapper>
      <SEO title="Schedule" />
      <h1>Schedule</h1>
      <Flex>
        {schedule.edges.map(({ node: { data } }) => {
          if (!data.Show_time) return null

          return (
            <CardScene key={data.recordId}>
              {data.Show_time} (<Link to={`artist/${data.Artist}`}>Artist</Link>
              )
            </CardScene>
          )
        })}
      </Flex>
    </Wrapper>
  )
}
