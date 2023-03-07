import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function NotFound() {
  return (
    <Layout>
      <SiteSEO title="404" />
      <section className="page_404">
        <div className="container py-2">
          <div className="page_404 mt-3">
            <img src="/404.svg" alt="404" className="mb-3" />
          </div>
          <div className="text_404 mb-3">
            <h1>Opps!</h1>
            <h3>This page doesn't exist...</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
