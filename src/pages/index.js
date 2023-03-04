import * as React from "react";
import Banner from "../components/landing/Banner";
import Feature from "../components/landing/Feature";
import Latest from "../components/landing/Latest";
import Layout from "../components/shared/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Feature />
      <Latest />
    </Layout>
  );
}
