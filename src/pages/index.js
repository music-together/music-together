import React from "react"
import Layout from "components/common/Layout"
import Schedule from "staticContainers/Schedule"
import SEO from "components/common/SEO"
import Header from "components/theme/Header"
import Landing from "staticContainers/Landing"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Landing />
    <Schedule />
  </Layout>
)
