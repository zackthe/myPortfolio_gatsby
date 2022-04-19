const path = require("path")
const createPaginatedPages = require('gatsby-paginate')
const { createRemoteFileNode } = require("gatsby-source-filesystem")


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`)  

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              img {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt(format: PLAIN, pruneLength: 25, truncate: false)
            timeToRead
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  createPaginatedPages({
    edges: posts,
    createPage: createPage,
    pageTemplate: 'src/templates/blog-list-template.js',
    pageLength: 2, 
    pathPrefix: 'blog', 
    context: {}, 
    buildPath: (index, pathPrefix) =>
    index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
  })
  
   posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {

        pathSlug: node.frontmatter.path,

      } // additional data can be passed via context
    })
  })


// const postsPerPage = 2;
// const numPages = Math.ceil(posts.length / postsPerPage);

// Array.from({ length: numPages }).forEach((_, i) => {
//   createPage({
//     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
//     component: path.resolve("./src/templates/blog-list.js"),
//     context: {
//       limit: postsPerPage,
//       skip: i * postsPerPage,
//       numPages,
//       currentPage: i + 1,
//     },
//   });
// });

}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }
    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
    }
  `)
}
exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.featuredImgUrl !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}