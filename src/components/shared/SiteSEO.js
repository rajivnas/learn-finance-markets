import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SiteSEO = ({ title, description, keywords }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
          siteDesc: description
          keywords
        }
      }
    }
  `);

  const metaKeywords = keywords || site.siteMetadata.keywords.join(",");
  const { siteTitle, siteDesc } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="keywords" content={metaKeywords} />
    </Helmet>
  );
};

export default SiteSEO;
