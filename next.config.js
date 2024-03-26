const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc()({
  pageExtensions: ["js", "md", "mdoc"],
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});
