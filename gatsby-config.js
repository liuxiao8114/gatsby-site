function createUrlObj(name, url, isInternal) {
  return {
    name,
    url,
    isInternal
  }
}

const footerLinks = []

footerLinks.push(createUrlObj(`上海总行`,`#`, true))
footerLinks.push(createUrlObj(`厦门分行`,`#`, true))
footerLinks.push(createUrlObj(`杭州分行`,`#`, true))
footerLinks.push(createUrlObj(`义乌分行`,`#`, true))
footerLinks.push(createUrlObj(`温州分行`,`#`, true))
footerLinks.push(createUrlObj(`天津分行`,`#`, true))
footerLinks.push(createUrlObj(`宁波分行`,`#`, true))
footerLinks.push(createUrlObj(`成都分行`,`#`, true))
footerLinks.push(createUrlObj(`福州分行`,`#`, true))
footerLinks.push(createUrlObj(`北京分行`,`#`, true))
footerLinks.push(createUrlObj(`青岛分行`,`#`, true))
footerLinks.push(createUrlObj(`济南分行`,`#`, true))
footerLinks.push(createUrlObj(`大连分行`,`#`, true))

module.exports = {
  siteMetadata: {
    title: `上海世贸`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    datas: {
      footerLinks
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
