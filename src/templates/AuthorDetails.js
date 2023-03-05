import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/shared/Layout";

export default function AuthorDetails({ data }) {
  const { name, image } = data.sanityAuthor;

  return (
    <Layout>
      <div className="container py-3">
        <div className="author_block">
          <div className="author_img">
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              loading="lazy"
              alt={name}
            />
          </div>
          <div className="author_info">
            <h2>{name}</h2>
            {/* <PortableAuthor _rawBio={_rawBio} /> */}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              qui amet eius. Voluptas optio architecto iusto, dolorum possimus
              nesciunt quasi molestiae rerum enim, beatae laboriosam iste
              accusamus quia. Hic consectetur dicta corrupti asperiores
              excepturi esse eveniet pariatur ea deserunt, ex quisquam velit
              incidunt repellendus praesentium cum dolore repellat aperiam.
              Delectus.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    sanityAuthor(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      _rawBio
    }
  }
`;
