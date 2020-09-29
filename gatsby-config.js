module.exports = {
  siteMetadata: {
    description: "Personal page of Matthew J Diaz",
    locale: "en",
    title: "Matthew J Diaz",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: "warm-red",
        showThemeLogo: false,
      },
    },
  ],
}
