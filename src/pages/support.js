import React from "react"
import styled from "styled-components"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import { Heading, Text, NarrowContainer } from "components"
import {DonateButton} from "components/DonateButton"
import { Link } from "gatsby"
import { InlineLinkContainer } from "../components"

const Blurb = styled.div`
  margin: var(--spacing--tight) 0;

  p {
    margin-bottom: var(--spacing--tight);
  }
`

const DonateContainer = styled.div`
  display: block;
  margin: var(--spacing--base) 0;
`

const SupportLink = styled(Link)`
  display: inline;
  margin: 0;
`

export default () => (
  <Layout>
    <SEO title="Support the artists" />

    <NarrowContainer>
      <Heading padding>Donate</Heading>

      <Blurb>
        <Text>
          MusicTogether is a living room concert series to support local Ontario
          musicians impacted by the effects of COVID19.
        </Text>
        <Text>
          The MusicTogether fund is an emergency relief fund for artists and
          musicians.
        </Text>

        <Text>
          <strong>Donations are accepted</strong> - anything helps and it goes
          straight into the pockets of local musicians.
        </Text>

        <DonateContainer>
          <DonateButton />
        </DonateContainer>

        <center>
          <Text subdued>Donations are non tax-deductable</Text>
        </center>

        <Text>
          Financial support for MusicTogether is made possible by the&nbsp;
          <SupportLink to="/">
            <InlineLinkContainer>generous contributions of our supporters.</InlineLinkContainer>
          </SupportLink>
        </Text>
      </Blurb>
    </NarrowContainer>
  </Layout>
)
