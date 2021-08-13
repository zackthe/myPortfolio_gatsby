/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zakariae belkasmi`,
    siteUrl: `https://www.belkasmizakariae.com`,
    description: `zakariae belkasmi is a front-end web devoloper who builds blazing fast modern experiences, based in morocco`,
  },
  
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "path/to/dir",
            },
          },
          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: true
              
            }
          },
        ],
      /*  // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,*/
       
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/images/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/blogposts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects_image`,
        path: `${__dirname}/src/assets/images/projects_image`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/projectData.json`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}

