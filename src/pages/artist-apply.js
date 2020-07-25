import React from "react"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Section from "components/common/Section"
import SectionTitle from "components/common/Section/title.jsx"
import { Button, NarrowContainer, ExternalLink, InlineLinkContainer } from "components"

export default () => (
  <Layout>
    <SEO title="Apply" />

    <NarrowContainer>
      <Section noDivider>
        <SectionTitle>Submissions Closed</SectionTitle>

        <p>Submissions are closed at this time.</p>
      </Section>
    </NarrowContainer>
  </Layout>
)
