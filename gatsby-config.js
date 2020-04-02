require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MusicTogether`,
    description: `Watch livestreams of artists across ontario.`,
    siteUrl: `https://musictogether.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.SCENES_BASE_ID,
            tableName: "Artists",
          },
          {
            baseId: process.env.SCENES_BASE_ID,
            tableName: "Schedule",
          },
        ],
      },
    },
  ],
}
