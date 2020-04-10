import React from "react"
import styled from "styled-components"
import Section from "components/common/Section"
import logo from "../../assets/ontario.jpg"
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
          <img
          src={logo} alt="Ontario"
          height="64px"
          width="160px"
          />
          <Text size="large">Ministry of Heritage, Sport, Tourism & Culture Industries</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Title Promotors</Heading>
        <a href="https://www.slaightmusic.com/">
          <Text size="large">Slaight Music</Text>
        </a>

        <a href="https://arts-crafts.ca/">
          <Text size="large">Arts & Crafts</Text>
        </a>
      </Section>

      <Section noDivider>
        <Heading>Crew</Heading>
        <Text size="large">
          Jeffrey Remedios of Universal Music <Personally />
        </Text>
        <Text size="large">
          Steve Kane of Warner Music
          <Personally />
        </Text>
        <Text size="large">
          Shane Carter of Sony Music
          <Personally />
        </Text>
        <Text size="large">
          Daniel Debow
          <Personally />
        </Text>
        <Text size="large">
          Raja Khanna
          <Personally />
        </Text>
        <Text size="large">Bedtracks <Small>(Oli Johnson)</Small></Text>
        <Text size="large">Metalworks Studios <Small>(Gil Moore)</Small></Text>
      </Section>

      <Section noDivider>
        <Heading>Roadies</Heading>

        <Text size="large">Gary Slaight<Personally /></Text>
        <Text size="large">Randy Lennox<Personally /></Text>
        <Text size="large">Derrick Ross<Personally /></Text>
        <Text size="large">Signal Creative Community <Small>(Dave Sorbara)</Small></Text>
        <Text size="large">Proscenium Services <Small>(Blanche Israël)</Small></Text>
        <Text size="large">Michael Girgis<Personally /></Text>
        <Text size="large">David Sharpe<Personally /></Text>
      </Section>

      <Section noDivider>
        <Heading>Curation Partners</Heading>

        <Text size="large">
          <a href="https://cionorth.ca/">
          CION: Cultural Industries Ontario North
          </a>
        </Text>
        <Text size="large">
          <a href="http://www.reseauontario.ca/fr/diffuseurs/membres-fondateurs/lassociation-des-professionels-de-la-chanson-et-de-la-musique/">
          APCM: Associaton des Professionnels de la Chanson et de la Musique
          </a>
        </Text>
        <Text size="large">
          <a href="https://darkspark.org//">
          Darkspark
          </a>
        </Text>
        <Text size="large">
          <a href="https://www.nagamo.ca/">
          Nagamo Publishing
          </a>
        </Text>
        <Text size="large">
          <a href="http://zneud.com/#home">
          ZNEUD
          </a>
        </Text>
        <Text size="large">
          <a href="https://riverfestelora.com/">
          Riverfest Elora
          </a>
        </Text>
        <Text size="large">
          <a href="https://theremixproject.com/">
          The Remix Project
          </a>
        </Text>
        <Text size="large">
          <a href="http://www.mnfsto.com/">
          Manifesto
          </a>
        </Text>
        <Text size="large">
          <a href="https://www.wavelengthmusic.ca/">
          Wavelength Music
          </a>
        </Text>
        <Text size="large">
          <a href="https://www.instagram.com/yesyesyall416/?hl=en">
          Yes Yes Y'all
          </a>
        </Text>
        <Text size="large">
          <a href="http://smallworldmusic.com/the-small-world-music-society/">
          Small World Music
          </a>
        </Text>
        <Text size="large">
          <a href="https://www.agakhanmuseum.org/">
          Aga Khan Museum
          </a>
        </Text>
        <Text size="large">
          <a href="https://www.urgnt.ca/">
          URGNT LIVE
          </a>
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
          <li>Henderson & Co for legal assistance</li>
          <li>Killbeat Media for handling PR</li>
          <li>
            All the volunteers who have contributed to this project, including
            all of you for watching, spreading the word and getting people to
            donate to help keep musicians at work!
          </li>
        </ul>
      </Blurb>
  </NarrowContainer>
)

const Small = styled.small`
  font-size: var(--font-size--default);
  opacity: 0.8;
  margin-left: var(--spacing--xtight);
`

function Personally() {
  return <Small>(personally)</Small>
}
