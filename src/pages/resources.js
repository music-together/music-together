import React from "react"
import styled from "styled-components"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Section from "components/common/Section"
import { Text, NarrowContainer, Heading, Button } from "components"
import eligibility from "../assets/eligibility.pdf"
import merch from "../assets/how-to-set-up-a-merch-store.pdf"
import performance from "../assets/performance-101.pdf"
import instagram from "../assets/how-to-live-stream.pdf"

const List = styled.ul`
  & > * {
    margin-bottom: var(--spacing--tight);
  }
`

export default () => (
  <Layout>
    <SEO title="Resources" />
    <NarrowContainer>
      <Heading padding>Artist Resources</Heading>
      <List>
        <li>
          <a href={eligibility}>
            <Text size="xlarge">Eligibility</Text>
          </a>
        </li>
        <li>
          <a href={merch}>
            <Text size="xlarge">How to Set Up a Merch Store</Text>
          </a>
        </li>
        <li>
          <a href={performance}>
            <Text size="xlarge">Performance best practices</Text>
          </a>
        </li>
        <li>
          <a href={instagram}>
            <Text size="xlarge">How to livestream Using Instagram</Text>
          </a>
        </li>
      </List>
    </NarrowContainer>
  </Layout>
)
