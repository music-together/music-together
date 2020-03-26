import React from "react"
import Layout from "components/common/Layout"
import Schedule from "staticContainers/Schedule"
import SEO from "components/common/SEO"
import Landing from "staticContainers/Landing"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Schedule />
  </Layout>
)
