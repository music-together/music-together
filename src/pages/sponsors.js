import React from "react"
import styled from "styled-components"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Section from "components/common/Section"
import { Text, NarrowContainer, Heading } from "components"

export default () => (
  <Layout>
    <SEO title="Sponsors" />

    <NarrowContainer>
      <Section noDivider>
        <Heading>Matching Partner</Heading>
        <a href="http://www.ontariocreates.ca/">
          <Text size="xlarge">Ontario Live</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Title Promotors</Heading>
        <a href="https://www.slaightmusic.com/">
          <Text size="xlarge">Slaight Music</Text>
        </a>

        <a href="https://arts-crafts.ca/">
          <Text size="xlarge">Arts & Crafts</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Crew</Heading>
        <Text size="xlarge">
          Jeffrey Remedios of Universal Music <Personally />
        </Text>
        <Text size="xlarge">
          Steve Kane of Warner Music
          <Personally />
        </Text>
        <Text size="xlarge">
          Shane Carter of Sony Music
          <Personally />
        </Text>
        <Text size="xlarge">
          Daniel Debow
          <Personally />
        </Text>
        <Text size="xlarge">
          Raja Khanna
          <Personally />
        </Text>
        <Text size="xlarge">Bedtracks/ Oli Johnson</Text>
        <Text size="xlarge">Metalworks Studios</Text>
      </Section>

      <Section noDivider>
        <Heading>Roadies</Heading>

        <Text size="xlarge">Signal Creative Community</Text>
        <Text size="xlarge">
          Michael Girgis
          <Personally />
        </Text>
      </Section>
    </NarrowContainer>
  </Layout>
)

const Small = styled.small`
  font-size: var(--font-size--default);
  opacity: 0.8;
  margin-left: var(--spacing--xtight);
`

function Personally() {
  return <Small>(personally)</Small>
}
