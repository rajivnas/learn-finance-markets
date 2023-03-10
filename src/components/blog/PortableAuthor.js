import React from "react";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const PortableAuthor = ({ _rawBio }) => {
  const ImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <img
        src={urlBuilder({
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_DATASET,
        })
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    );
  };

  const components = {
    types: {
      image: ImageComponent,
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" && "noindex nofollow"}
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
      checkmarks: ({ children }) => <ol>{children}</ol>,
    },
  };

  return (
    <div className="blog_preview">
      <PortableText value={_rawBio} components={components} />
    </div>
  );
};

export default PortableAuthor;
