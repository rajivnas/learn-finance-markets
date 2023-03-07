import { Link } from "gatsby";
import React from "react";

const Related = ({ related }) => {
  return (
    <div className="pre_sidebar">
      <h3>Related</h3>
      <ul className="related">
        {related.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/blog/${item.slug.current}`}>
                <p>{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Related;
