import { graphql } from "gatsby";
import React from "react";
import BlogList from "../components/blog/BlogList";
import Pagination from "../components/blog/Pagination";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function BlogPage({ data, pageContext }) {
  const blogs = data.allSanityPost.edges;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <Layout>
      <SiteSEO title="Blog" />
      <BlogList blogs={blogs} />
      {numberOfPages > 1 && (
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          baseURL="/blog"
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($limit: Int, $offset: Int) {
    allSanityPost(sort: { _createdAt: DESC }, limit: $limit, skip: $offset) {
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
