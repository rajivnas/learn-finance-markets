import * as React from "react";
import Banner from "../components/landing/Banner";
import Feature from "../components/landing/Feature";
import Latest from "../components/landing/Latest";
import NSEGraph from "../components/landing/NSEGraph";
import Layout from "../components/shared/Layout";

export default function Home({ serverData }) {
  const NSEIndex = serverData;
  return (
    <Layout>
      <Banner />
      <Feature />
      <NSEGraph NSEIndex={NSEIndex} />
      <Latest />
    </Layout>
  );
}

export async function getServerData() {
  const url =
    "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050";
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
      },
    });

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 200,
      props: {},
    };
  }
}
