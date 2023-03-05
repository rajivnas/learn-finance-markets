import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Blog = ({ blogs }) => {
  return (
    <div className="blog_page_list">
      {blogs.map((blog, i) => {
        return (
          <div key={i} className="blog_page_item">
            <GatsbyImage
              image={blog.node.mainImage.asset.gatsbyImageData}
              alt={blog.node.title}
            />
            <Link to={`/blog/${blog.node.slug.current}`}>
              <h1>{blog.node.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
