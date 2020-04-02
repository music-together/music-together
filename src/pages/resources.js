import React from "react"
import styled from "styled-components"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import { Text, NarrowContainer, Heading } from "components"
import collectingFacebook from '../assets/Collecting your Facebook advertising credits0401.pdf'
import eligibility from '../assets/Eligibility0401.pdf'
import instagram from '../assets/How to Livestream on Instagram0401.pdf'
import donation from '../assets/How to Set Up a Donation Page0401.pdf'
import merch from '../assets/How to Set Up a Merch Store0401.pdf'
import bestPractices from '../assets/MusicTogether Best Practices0401.pdf'
import showExpectations from '../assets/MusicTogether Show Expectations0401.pdf'

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
          <a href={bestPractices}>
            <Text size="xlarge">Best Practices</Text>
          </a>
        </li>
        <li>
          <a href={showExpectations}>
            <Text size="xlarge">Performance Expectations</Text>
          </a>
        </li>
        <li>
          <a href={merch}>
            <Text size="xlarge">How to Set Up a Merch Store</Text>
          </a>
        </li>
        <li>
          <a href={instagram}>
            <Text size="xlarge">How to Livestream on Instagram</Text>
          </a>
        </li>
        <li>
          <a href={donation}>
            <Text size="xlarge">How to Set Up a Donation Page</Text>
          </a>
        </li>
        <li>
          <a href={collectingFacebook}>
            <Text size="xlarge">Collecting your Facebook advertising credits</Text>
          </a>
        </li>
      </List>
    </NarrowContainer>
  </Layout>
)
