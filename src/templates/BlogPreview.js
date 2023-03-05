import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/shared/Layout";

export default function BlogPreview({ data }) {
  const { mainImage, title } = data.sanityPost;

  return (
    <Layout>
      <div className="container py-3">
        <GatsbyImage image={mainImage.asset.gatsbyImageData} alt={title} />
        <h1>{title}</h1>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      mainImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
