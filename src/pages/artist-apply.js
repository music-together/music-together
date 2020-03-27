import React from "react"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import { Heading, Button } from "components"

export default () => (
  <Layout>
    <SEO title="Apply" />

    <Heading size="xlarge">Apply to perform</Heading>
    <div>How to apply</div>

    <div>&lt;TBD: Instructions&gt;</div>

    <a
      href="https://airtable.com/shraDwLHxfGjP0fXl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Apply now</Button>
    </a>

    <Heading size="xlarge">Change show times or profile</Heading>
    <div>How to make changes</div>

    <div>&lt;TBD: Instructions&gt;</div>

    <a
      href="https://airtable.com/shrQwXjoDurugYKKp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Request a change</Button>
    </a>
  </Layout>
)
