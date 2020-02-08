module.exports = {
  siteMetadata: {
    title: `The Ultimate Product Management Guide`,
    name: `yourproductguy`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `Github`,
        url: `https://github.com/codebushi/gatsby-theme-document`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/motwanisuhas`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/Overview", "/Interview Prep and Job Search", "/Resources"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
