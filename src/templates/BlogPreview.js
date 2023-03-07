import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/shared/Layout";
import Related from "../components/blog/sidebar/Related";
import SiteSEO from "../components/shared/SiteSEO";
import PortableRichText from "../components/blog/PortableRichText";

export default function BlogPreview({ data }) {
  const {
    title,
    publishedAt,
    categories,
    mainImage,
    _rawBody,
    author,
    related,
  } = data.sanityPost;

  return (
    <Layout>
      <SiteSEO title={title} />
      <div className="blog_preview_page py-2">
        <div className="container">
          <GatsbyImage image={mainImage.asset.gatsbyImageData} alt={title} />
          <div className="blog_info">
            <span>{publishedAt}</span>
            {categories.map((category, i) => {
              return (
                <Link to={`/category/${category.slug.current}`} key={i}>
                  <span>#{category.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="blog_content">
            <div className="main_content">
              <h1>{title}</h1>
              <PortableRichText _rawBody={_rawBody} />
              <div className="post_author">
                <Link to={`/author/${author.slug.current}`}>
                  <span>- {author.name}</span>
                </Link>
              </div>
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
      publishedAt(formatString: "DD MMMM, YYYY")
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
      categories {
        title
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
