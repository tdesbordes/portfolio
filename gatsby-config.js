module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Thibault Desbordes',
    description: 'Software, fullstack enginner',
    keywords: 'full stack, software enginner, portfolio, personal website',
    url: 'http://tdesbordes.github.io/portfolio'
  },
  pathPrefix: `/portfolio`,
};
