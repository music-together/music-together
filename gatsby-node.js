const path = require("path")

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const sceneTemplate = path.resolve("./src/templates/artist.jsx")
    const { data, errors } = await graphql(`
      {
        artists: allAirtable(filter: { table: { eq: "Artists" } }) {
          edges {
            node {
              id
              recordId
            }
          }
        }
      }
    `)

    if (errors) {
      throw new Error(errors)
    }

    data.artists.edges.forEach(({ node: { recordId } }) => {
      createPage({
        path: `artist/${recordId}`,
        component: sceneTemplate,
        context: {
          recordId,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
