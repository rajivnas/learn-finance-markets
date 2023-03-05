import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/shared/Layout";

export default function Author({ data }) {
  const authors = data.allSanityAuthor.edges;

  return (
    <Layout>
      <div className="author_page container py-3">
        <div className="section_title">
          <h2>All Authors</h2>
        </div>

        <div className="author_list mt-3">
          {authors.map((author, i) => {
            return (
              <div key={i} className="author_person">
                <GatsbyImage
                  image={author.node.image.asset.gatsbyImageData}
                  alt={author.name}
                />
                <Link to={`/author/${author.node.slug.current}`}>
                  <h2>{author.node.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($limit: Int!, $offset: Int!) {
    allSanityAuthor(sort: { _createdAt: DESC }, limit: $limit, skip: $offset) {
      edges {
        node {
          name
          image {
            asset {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;
