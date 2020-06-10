const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD HH:mm:ss")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.title,
        context: {
          html: node.html,
          title: String(node.frontmatter.title),
          date: node.frontmatter.date,
        },
        component: path.resolve(__dirname, "./PostTemplate.tsx"),
      })
    })
  })
}
