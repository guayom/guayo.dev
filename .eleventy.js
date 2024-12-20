module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });
  eleventyConfig.addFilter("dateString", function (dateVal, locale = "en-us") {
    var theDate = new Date(dateVal);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return theDate.toLocaleDateString(locale, options);
  });
};
