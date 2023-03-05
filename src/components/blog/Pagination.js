import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import PageCounter from "./PageCounter";

const Pagination = ({ baseURL, numberOfPages, currentPage }) => {
  const prevPage = currentPage - 1 <= 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container py-2">
      <div className="pagination">
        <Link
          to={`${baseURL}/${prevPage}`}
          className={clsx(currentPage <= 1 && "disabled")}
        >
          &lt; Prev
        </Link>
        <PageCounter>
          <span className="page_counter">
            {currentPage} of {numberOfPages}
          </span>
        </PageCounter>
        <Link
          to={`${baseURL}/${nextPage}`}
          className={clsx(currentPage >= numberOfPages && "disabled")}
        >
          Next &gt;
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
