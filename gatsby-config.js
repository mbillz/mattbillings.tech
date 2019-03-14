module.exports = {
  siteMetadata: {
    title: `Matt Billings dot Tech`,
    description: `Personal website for Matt Billings`,
    author: `mbillings@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
