import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allSanityPost(sort: { _createdAt: DESC }, limit: 5) {
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

const Recent = () => {
  const data = useStaticQuery(query);

  const blogs = data.allSanityPost.edges;

  return (
    <div className="side_banner">
      <h3>Recent</h3>
      <div className="recent">
        {blogs.map((blog, i) => {
          return (
            <div key={i}>
              <Link to={`/blog/${blog.node.slug.current}`}>
                <p>{blog.node.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
