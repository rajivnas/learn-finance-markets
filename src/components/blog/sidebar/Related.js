import { Link } from "gatsby";
import React from "react";

const Related = ({ related }) => {
  return (
    <div className="side_banner">
      <h3>Related</h3>
      <div className="recent">
        {related.map((item, i) => {
          return (
            <div key={i}>
              <Link to={`/blog/${item.slug.current}`}>
                <p>{item.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related;
