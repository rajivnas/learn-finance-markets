import { graphql } from "gatsby";
import React from "react";
import BlogList from "../components/blog/BlogList";
import Layout from "../components/shared/Layout";

export default function BlogPage({ data }) {
  const blogs = data.allSanityPost.edges;

  return (
    <Layout>
      <BlogList blogs={blogs} />
    </Layout>
  );
}

export const query = graphql`
  {
    allSanityPost(sort: { _createdAt: DESC }) {
      edges {
        node {
          title
          mainImage {
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
