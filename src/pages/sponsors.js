import React from "react"
import styled from "styled-components"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Section from "components/common/Section"
import { Text, NarrowContainer, Heading, DonateButton } from "components"

const Blurb = styled.div`
  margin: var(--spacing--tight) 0;

  ul {
    margin-top: var(--spacing--tight);
    list-style-type: circle;
  }

  p {
    margin-bottom: var(--spacing--tight);
  }

  a {
    text-decoration: underline;
  }
`

export default () => (
  <Layout>
    <SEO title="Sponsors" />
    <NarrowContainer>
      <Blurb>
        <Text>
          MusicTogether supports working Ontario musicians during the COVID-19
          crisis with direct funding, new opportunities for fan discovery, and
          eCommerce tools. $300,000 has been committed thanks to the generosity
          of the music community funders listed below and matching funds from
          OntarioLive.
        </Text>
        <Text>
          MusicTogether is run by volunteers. 100% of our funds go straight to
          working musicians affected by the COVID-19 crisis.
        </Text>
        <Text>
          MusicTogether.ca was founded by Raja Khanna, Gary Slaight, Jeffrey Remedios, Oliver Johnson, Arts & Crafts and Daniel Debow (partners in the{" "}
          <a
            href="https://www.therootdownstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Root Down Studio
          </a>
          ).
        </Text>
        <Text>Financial support for MusicTogether.ca comes from:</Text>
      </Blurb>

      <Section noDivider>
        <Heading>Matching Partner</Heading>

        <a href="http://www.ontariocreates.ca/">
          <Text size="medium">Ontario Creates</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Title Promotors</Heading>
        <a href="https://www.slaightmusic.com/">
          <Text size="medium">Slaight Music</Text>
        </a>

        <a href="https://arts-crafts.ca/">
          <Text size="medium">Arts & Crafts</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Crew</Heading>
        <Text size="medium">
          Jeffrey Remedios of Universal Music <Personally />
        </Text>
        <Text size="medium">
          Steve Kane of Warner Music
          <Personally />
        </Text>
        <Text size="medium">
          Shane Carter of Sony Music
          <Personally />
        </Text>
        <Text size="medium">
          Daniel Debow
          <Personally />
        </Text>
        <Text size="medium">
          Raja Khanna
          <Personally />
        </Text>
        <Text size="medium">Bedtracks/ Oli Johnson</Text>
        <Text size="medium">Metalworks Studios</Text>
      </Section>

      <Section noDivider>
        <Heading>Roadies</Heading>

        <Text size="medium">Signal Creative Community</Text>
        <Text size="medium"><a href="http://www.hendersonandco.ca/" target="_blank" rel="noopener noreferrer">Henderson & Co.</a></Text>
        <Text size="medium">Michael Girgis
          <Personally />
          </Text>
        <Text size="medium">
          Gary Slaight
          <Personally />
          </Text>
        <Text size="medium">Derrick Ross
          <Personally />
            </Text>
      </Section>

      <Blurb>
        <Text>and you, the fans! Click here to donate now.</Text>
      </Blurb>

      <DonateButton>Donate</DonateButton>

      <Blurb>
        <Text>MusicTogether would also like to acknowledge:</Text>
        <ul>
          <li>
            The volunteers at Shopify, without whom this website would not
            exist.
          </li>
          <li>
            Arts & Crafts for being the backbone of this entire operation. A
            HUGE thank you to the Arts & Crafts team for managing the marketing,
            the money and so much more.
          </li>
          <li>
            All the volunteers who have contributed to this project, including
            all of you for watching, spreading the word and getting people to
            donate to help keep musicians at work!
          </li>
        </ul>
      </Blurb>
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
