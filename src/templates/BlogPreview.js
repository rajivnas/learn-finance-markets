import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/shared/Layout";
import Related from "../components/blog/sidebar/Related";
import SiteSEO from "../components/shared/SiteSEO";

export default function BlogPreview({ data }) {
  const { mainImage, title, related } = data.sanityPost;

  return (
    <Layout>
      <SiteSEO title={title} />
      <div className="blog_preview py-2">
        <div className="container">
          <GatsbyImage image={mainImage.asset.gatsbyImageData} alt={title} />
          <div className="blog_content">
            <div className="main_content">
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                a maxime possimus voluptatibus velit reprehenderit nihil iste!
                Quam itaque tempora, voluptatem deleniti aliquam voluptas fugit
                quia animi. Vero pariatur praesentium quisquam earum optio
                laborum iure nemo recusandae ex harum? Dolore adipisci
                voluptates earum minima assumenda tempora pariatur modi natus
                est deserunt, rem distinctio molestias libero. Debitis iusto
                natus alias velit, est veritatis autem deserunt dolor cum ipsa
                qui dolores maxime a! Fugiat, laudantium ut nesciunt quia et
                nulla amet? Possimus temporibus natus aspernatur, quo dolor
                velit quaerat libero odit, consectetur fugiat debitis ratione
                voluptas doloremque. Rerum vero esse impedit modi, eum quis non
                nisi quod nobis eos maxime, omnis est, ducimus sapiente itaque.
                Tempora ab dicta delectus natus. Officia odit, beatae ducimus ut
                saepe exercitationem aliquid aut ad, excepturi inventore harum
                optio quos. Odit quidem minus esse repellendus molestiae harum
                natus, consequuntur deserunt nobis sed temporibus quaerat magnam
                qui. Nihil explicabo, molestias magni atque totam sint dolor!
                Possimus numquam ad, dicta accusamus quam est. Veniam magnam
                modi reiciendis officiis fugiat laudantium unde debitis,
                delectus vitae, explicabo rerum. Aliquid aperiam eligendi ut
                enim eius voluptates nihil eveniet cum eos quas! Ipsa error
                magnam neque vel voluptate quidem iusto, earum distinctio, quia
                mollitia temporibus dolorum eveniet corporis ex, natus non
                aperiam aliquam commodi modi ipsam sit rem. Omnis, temporibus?
                Repudiandae quo maxime architecto eius vitae tempore
                voluptatibus voluptatum perferendis reprehenderit aliquid sequi
                officiis suscipit laborum, distinctio, ducimus fuga saepe ut
                reiciendis quod harum. Obcaecati, magni facilis! Porro
                doloremque maxime quae totam consequatur!
              </p>
            </div>
            <div className="right_bar">
              <Related related={related} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      mainImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      author {
        name
        image {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        slug {
          current
        }
      }
      related {
        title
        slug {
          current
        }
      }
      _rawBody
    }
  }
`;
