exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;

  // templates path
  const blogPage = require.resolve("./src/templates/BlogPage.js");
  const blogTemplate = require.resolve("./src/templates/BlogPreview.js");

  const categoryPage = require.resolve("./src/templates/Category.js");
  const categoryTemplate = require.resolve(
    "./src/templates/CategoryDetails.js"
  );

  const authorPage = require.resolve("./src/templates/Author.js");
  const authorTemplate = require.resolve("./src/templates/AuthorDetails.js");

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost(sort: { _createdAt: DESC }, limit: 1000) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }

      allSanityCategory {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }

      allSanityAuthor {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogs = result.data.allSanityPost.edges || [];
  const categories = result.data.allSanityCategory.edges || [];
  const authors = result.data.allSanityAuthor.edges || [];

  // single blogs pages
  blogs.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`;
    createPage({
      // defer: true,
      path,
      component: blogTemplate,
      context: {
        slug: edge.node.slug.current,
        relatedPosts: edge.node.related,
      },
    });
  });

  // single category pages
  categories.forEach((edge) => {
    const path = `/category/${edge.node.slug.current}`;
    createPage({
      path,
      component: categoryTemplate,
      context: {
        id: edge.node.id,
      },
    });
  });

  // single Author pages
  authors.forEach((edge) => {
    const path = `/author/${edge.node.slug.current}`;
    createPage({
      path,
      component: authorTemplate,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  // blogs paginated pages
  const totalBlogList = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogList }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: blogPage,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogList,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryList = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryList }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/category` : `/category/${index + 1}`,
      component: categoryPage,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryList,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorList = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorList }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/author` : `/author/${index + 1}`,
      component: authorPage,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorList,
        currentPage: index + 1,
      },
    });
  });
};
