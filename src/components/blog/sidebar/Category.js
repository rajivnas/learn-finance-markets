import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  {
    allSanityCategory(sort: { _createdAt: DESC }) {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

const Category = () => {
  const data = useStaticQuery(query);
  const categories = data.allSanityCategory.edges;

  return (
    <div className="side_banner">
      <h3>Category</h3>

      <ul className="category">
        {categories.map((category, i) => {
          return (
            <li key={i}>
              <Link to={`/category/${category.node.slug.current}`}>
                <span>{category.node.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
