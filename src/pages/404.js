import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function NotFound() {
  return (
    <Layout>
      <SiteSEO title="404" />
      <div className="container py-2">
        <h2>Page not found</h2>
      </div>
    </Layout>
  );
}
