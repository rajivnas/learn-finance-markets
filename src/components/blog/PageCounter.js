import React from "react";

const PageCounter = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default PageCounter;
