/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Learn Finance Markets`,
    description: `Learn Finance Markets - is a financial related blog site`,
    siteUrl: `https://learn-finance-markets.vercel.app`,
    keywords: [
      "Finance Markets",
      "Stock Markets",
      "Investment",
      "Cryptocurrency",
    ],
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
  ],
};
