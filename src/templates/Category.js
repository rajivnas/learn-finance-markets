import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function Category({ data }) {
  const categories = data.allSanityCategory.edges;

  return (
    <Layout>
      <SiteSEO title="Category" />
      <div className="container py-3">
        <div className="section_title">
          <h2>Listed Categories</h2>
        </div>

        <div className="category_list">
          {categories.map((category, i) => {
            return (
              <div key={i} className="category_item">
                <Link to={`/category/${category.node.slug.current}`}>
                  <h3>{category.node.title}</h3>
                </Link>
                <p>{category.node.description}</p>
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
    allSanityCategory(
      sort: { _createdAt: DESC }
      limit: $limit
      skip: $offset
    ) {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`;
