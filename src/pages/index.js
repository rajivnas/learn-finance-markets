import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/shared/Layout";

export default function Home({ data }) {
  const authors = data.allSanityAuthor.edges;

  return (
    <Layout>
      <div className="container py-2">
        <h3>All Authors</h3>

        <div className="author_list py-2">
          {authors.map((author, i) => {
            return (
              <div key={i} className="py-2">
                <GatsbyImage
                  image={author.node.image.asset.gatsbyImageData}
                  alt={author.node.name}
                />
                <h2>{author.node.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allSanityAuthor {
      edges {
        node {
          name
          image {
            asset {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
