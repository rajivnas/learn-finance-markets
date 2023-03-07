import React from "react";
import Layout from "../components/shared/Layout";
import SiteSEO from "../components/shared/SiteSEO";

export default function About() {
  return (
    <Layout>
      <SiteSEO title="About" />
      <section className="about_page">
        <div className="container py-3">
          <div className="section_title">
            <h1>Let us introduce ourself..</h1>
          </div>
          <div className="about_info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              reprehenderit eos non aut ipsa reiciendis, vitae doloremque
              architecto unde, quis iusto impedit.
            </p>
            <h3>Who we are?</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              earum veritatis consequatur cupiditate assumenda ducimus repellat
              eius. Debitis, iure. Totam, architecto tenetur culpa ea fuga
              voluptate praesentium consectetur numquam voluptatibus? Vel autem
              repellat quaerat. Amet?
            </p>

            <h3>Why we are here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aspernatur quisquam fugit saepe dicta possimus eaque hic eligendi
              laboriosam pariatur aut magni in a corporis quis consectetur,
              earum dolorem delectus sunt, dolores natus dolorum nisi! Incidunt
              eos nulla maxime perspiciatis consequuntur reprehenderit
              voluptatum cum hic odio.
            </p>

            <h3>Khow our future plans.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aspernatur quisquam fugit saepe dicta possimus eaque hic eligendi
              laboriosam pariatur aut magni in a corporis quis consectetur,
              earum dolorem delectus sunt, dolores natus dolorum nisi! Incidunt
              eos nulla maxime perspiciatis consequuntur reprehenderit
              voluptatum cum hic odio. pariatur aut magni in a corporis quis
              consectetur, earum dolorem delectus sunt, dolores natus dolorum
              nisi! Incidunt eos nulla maxime perspiciatis consequuntur
              reprehenderit voluptatum cum hic odio.
            </p>

            <br />
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aspernatur quisquam fugit saepe dicta possimus eaque hic eligendi
              laboriosam pariatur aut magni in a corporis quis consectetur,
              earum dolorem delectus sunt, dolores natus dolorum nisi! Incidunt
              eos nulla maxime perspiciatis consequuntur reprehenderit
              voluptatum cum hic odio. perspiciatis consequuntur reprehenderit
              voluptatum cum hic odio.
            </p>
          </div>

          <div className="admin_link">
            <span>
              <a
                href="http://localhost:3333/desk"
                target="_blank"
                rel="noreferrer"
              >
                Admin
              </a>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
