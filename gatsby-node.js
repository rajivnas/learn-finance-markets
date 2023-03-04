exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;

  // templates path
  const blogPage = require.resolve("./src/templates/BlogPage.js");
  const blogTemplate = require.resolve("./src/templates/BlogPreview.js");

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
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogs = result.data.allSanityPost.edges || [];

  // single blogs pages
  blogs.forEach((edge) => {
    const path = `/blog/${edge.node.slug.current}`;
    createPage({
      path,
      component: blogTemplate,
      context: {
        slug: edge.node.slug.current,
        relatedPosts: edge.node.related,
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
};
