import React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="text_block">
          <h1>
            Learn basic facts <br /> of every investment.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consec, adipisicing elit. Voluptatibus,
            odio quaerat dolor sit
          </p>
          <Link to="/blog">
            <button className="btn_banner">Learn &rarr;</button>
          </Link>
        </div>
        <div className="img_block">
          <img src="banner.svg" width={100} height="auto" alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
