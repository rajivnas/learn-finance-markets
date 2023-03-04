import React from "react";
import Category from "./sidebar/Category";
import Recent from "./sidebar/Recent";
import Blog from "./Blog";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog_page">
      <div className="container py-2">
        <Blog blogs={blogs} />

        <aside className="right_banner">
          <Recent />
          <Category />
        </aside>
      </div>
    </div>
  );
};

export default BlogList;
