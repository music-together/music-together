import React from "react"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Landing from "staticContainers/Landing"

export default () => (
  <Layout isHomeScreen>
    <SEO title="Home" />
    <Landing />
  </Layout>
)
