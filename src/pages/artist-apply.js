import React from "react"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import { Button } from "components/Button"

export default () => (
  <Layout>
    <SEO title="Apply" />

    <h1>Apply to perform</h1>
    <div>How to apply</div>

    <div>
      &lt;TBD: Instructions&gt;
    </div>

    <a href="https://airtable.com/shraDwLHxfGjP0fXl" target="_blank">
      <Button>
        Apply now
      </Button>
    </a>

    <h1>Change show times or profile</h1>
    <div>How to make changes</div>

    <div>
      &lt;TBD: Instructions&gt;
    </div>

    <a href="https://airtable.com/shrQwXjoDurugYKKp" target="_blank">
      <Button>
        Request a change
      </Button>
    </a>
  </Layout>
)
