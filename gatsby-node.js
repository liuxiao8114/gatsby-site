/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async({ actions: { createPage } }) => {
  const context = {
    footer: {
      banks: [
        {
          id: 1,
          name: `Dalian`,
          url: `#`,
          isInternal: true
        }
      ]
    }
  }

  createPage({
    path: `/`,
    component: require.resolve('./src/components/footer.js'),
    context: { 
      footer: require(`./src/datas/contents/footer.js`)
    },
  })
}


/*
const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.downloadMediaFiles = ({
  nodes,
  store,
  cache,
  createNode,
  createNodeId,
  _auth,
}) => {

}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type === `File`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { creastePage } = actions
  const result = awai
*/
