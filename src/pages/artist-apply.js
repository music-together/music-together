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
        <SectionTitle>Apply to perform</SectionTitle>

        <ul>
          <li>1. Apply for $1,000 in emergency relief funding</li>
          <li>2. Play a livestream show to engage your fans, and earn new ones</li>
          <li>3. Monetize your audience through a merch business </li>
        </ul>

        <a
          href="https://airtable.com/shraDwLHxfGjP0fXl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Apply</Button>
        </a>
      </Section>

      <Section>
        <SectionTitle>Apply</SectionTitle>
        <p>
          <ExternalLink href="https://music-together.netlify.com/static/Eligibility0401-495cb3739bfa7c2439fe343c38256af3.pdf">
            <InlineLinkContainer>Eligible musicians</InlineLinkContainer>
          </ExternalLink> in Ontario can apply to perform through
          MusicTogether, and will be evaluated on a first-come, first-serve
          basis.
        </p>
        <p>
          Our goal is to get you paid for what you do best, and celebrate your
          music during this hardship. There's a few ground rules to cover first:
        </p>
        <ul>
          <li>* You must be a working musician making your living through music</li>
          <li>* You gotta be local to Ontario</li>
          <li>* You have to be able to film your own livestream
          </li>
        </ul>
        <p><ExternalLink href="https://airtable.com/shraDwLHxfGjP0fXl">
          <InlineLinkContainer>Learn more here</InlineLinkContainer>
        </ExternalLink> and let's jam!</p>
      </Section>
      <Section>
        <SectionTitle>Play</SectionTitle>
        <p>
          If your application is accepted, you'll agree to perform a livestream
          and we'll work with you to schedule an hour set into our lineup.{" "}
        </p>
        <p>
          <b>
            You will perform the livestream through your own Instagram/Facebook
            channel,
          </b>{" "}
          and we'll send viewers to you through MusicTogether, our community
          partners, and your own social channels.
        </p>
        <p>
          Please add the "Stay Home" sticker onto your livestream to help
          encourage responsible social distancing. You can optionally write out
          the hashtag (#musictogether) on a board to show your support and get
          people talking about your show. The more people talk about it, the
          more opportunities for people to discover your music.
        </p>
        <p>
          <ExternalLink href="https://airtable.com/shraDwLHxfGjP0fXl">
            <InlineLinkContainer>Learn more here</InlineLinkContainer>
          </ExternalLink>
        </p>
      </Section>
      <Section>
        <SectionTitle>Monetize</SectionTitle>
        <p>
          We've curated some resources and deals to help you convert your
          following into a business. You'll receive a care packaging including:
        </p>
        <ul>
          <li>
            * How-to guides for creating and marketing a merch business,
            tailored just for musicians
          </li>
          <li>
            * Exclusive COVID-relief offerings from Shopify, Facebook Ads, and
            community partners to get you up and running
          </li>
          <li>
            * Cross-promotions through our PR, marketing, and community channels
          </li>
        </ul>
        <p>
          <ExternalLink href="https://airtable.com/shraDwLHxfGjP0fXl">
            <InlineLinkContainer>Learn more here</InlineLinkContainer>
          </ExternalLink>
        </p>
      </Section>
    </NarrowContainer>
  </Layout>
)
