import React from "react"
import Layout from "components/common/Layout"
import Schedule from "staticContainers/Schedule"
import SEO from "components/common/SEO"
import Header from "components/theme/Header"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Schedule />
  </Layout>
)
