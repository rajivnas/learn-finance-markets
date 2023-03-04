import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allSanityPost(sort: { _createdAt: DESC }, limit: 3) {
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

const Latest = () => {
  const data = useStaticQuery(query);

  const blogs = data.allSanityPost.edges;

  return (
    <section className="latest">
      <div className="container py-3">
        <div className="section_title">
          <h2>Latest Posts</h2>
        </div>
        <div className="blog_list">
          {blogs.map((blog, i) => {
            return (
              <div key={i} className="blog_item">
                <GatsbyImage
                  image={blog.node.mainImage.asset.gatsbyImageData}
                  alt={blog.node.title}
                />

                <Link to={`/blog/${blog.node.slug.current}`}>
                  <h3>{blog.node.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
