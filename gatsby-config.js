module.exports = {
  siteMetadata: {
    description: "Personal page of Matthew J Diaz",
    locale: "en",
    title: "Matthew J Diaz",
  },
  pathPrefix: '/portfolio',
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        // basePath: "/",
        // contentPath: "content/",
        theme: "bright-red",
        showThemeLogo: false,
      },
    },
  ],
}
