module.exports = {
  siteMetadata: {
    title: `My Personal Portfolio`,
    description: `My personal portfolio built with Gatsby`,
    author: `maryojo`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-remark-emojis`,
      options: {
        // Deactivate the plugin globally (default: true)
        active : true,
        // Add a custom css class
        class  : `emoji-icon`,
        // In order to avoid pattern mismatch you can specify
        // an escape character which will be prepended to the
        // actual pattern (e.g. `#:poop:`).
        escapeCharacter : `#`, // (default: '')
        // Select the size (available size: 16, 24, 32, 64)
        size   : 32,
        // Add custom styles
        styles : {
          display      : `inline`,
          margin       : `0`,
          // margin-top : `1px`,
          position     : `relative`,
          top          : `5px`,
          width        : `25px`,
        },
      },
    },
  ],
}
