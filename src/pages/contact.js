import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function Contact() {
  return (
    <Layout>
      <SiteSEO title="Contact" />
      <div className="contact py-3">
        <div className="container contack_block">
          <div className="contact_img_block">
            <img src="/contact.svg" alt="Contact" />
          </div>
          <div className="contact_form">
            <h3>Write us anytime.</h3>

            <form action="#" className="mb-3">
              <label for="name" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                required
              />

              <label for="email" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email.."
                required
              />

              <label for="subject" htmlFor="subject">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "165px" }}
                required
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
