import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import { Wrapper, Flex, CardScene } from "./styles"

export default () => {
  const { schedule } = useStaticQuery(graphql`
      query {
          schedule: allAirtable(filter: { table: { eq: "Schedule (test - Marlow)" } }) {
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
    <Wrapper as={Container}>
      <SEO title="Schedule" />
      <h1>Schedule</h1>
      <Flex>
        {schedule.edges.map(
          ({
             node: {
               data
             },
           }) => {
             if (!data.Show_time) return null

             return (
               <CardScene key={data.recordId}>
                 {data.Show_time} (<a href={`artist/${data.Artist}`}>Artist</a>)
               </CardScene>
             );
          }
        )}
      </Flex>
    </Wrapper>
  )
}
