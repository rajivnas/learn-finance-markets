import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";
import PortableAuthor from "../components/blog/PortableAuthor";

export default function AuthorDetails({ data }) {
  const { name, image, _rawBio } = data.sanityAuthor;

  return (
    <Layout>
      <SiteSEO title={name} />
      <div className="container py-3">
        <div className="author_block">
          <div className="author_img">
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              loading="lazy"
              alt={name}
            />
          </div>
          <div className="author_info">
            <h2>{name}</h2>
            <PortableAuthor _rawBio={_rawBio} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    sanityAuthor(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      _rawBio
    }
  }
`;
