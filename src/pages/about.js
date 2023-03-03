import React from "react";
import Layout from "../components/shared/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-2">
        <h2>Hello about</h2>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          reprehenderit eos non aut ipsa reiciendis, vitae doloremque architecto
          unde, quis iusto impedit sit dolore doloribus, tenetur dignissimos
          nemo optio quasi velit nam! Perferendis eum nihil officia voluptates
          quae magnam provident ratione dolor possimus. Dolor nihil dolorem
          delectus mollitia sunt enim!
        </p>

        <a href="https://server-nine-coral.vercel.app/desk" target="_blank">
          Admin
        </a>
      </div>
    </Layout>
  );
}
