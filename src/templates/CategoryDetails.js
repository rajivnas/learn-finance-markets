import React from "react";
import { graphql } from "gatsby";
import BlogList from "../components/blog/BlogList";
import Layout from "../components/shared/Layout";

export default function CategoryDetails({ data }) {
  const blogs = data.allSanityPost.edges;

  return (
    <Layout>
      <BlogList blogs={blogs} />
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    sanityCategory(id: { eq: $id }) {
      title
    }
    allSanityPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          slug {
            current
          }
          categories {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`;
