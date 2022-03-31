const fs = require("fs");
const util = require("util");
const { optimize } = require("svgo");
const path = require("path");
const markdownIt = require("markdown-it");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");

const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const contentParser = require("./utils/transforms/contentParser.js");
const htmlMinTransform = require("./utils/transforms/htmlmin.js");
const { findBySlug } = require("./utils/findBySlug");

/**
 * Import site configuration
 */
const config = require("./src/_data/config.json");
const pathConfig = require("./src/_data/paths.json");

module.exports = function (eleventyConfig) {
  /**
   * Removed renaming Passthrough file copy due to issues with incremental
   * https://github.com/11ty/eleventy/issues/1299
   */
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ static: "/" });

  /**
   * Create custom data collections
   */
  eleventyConfig.addCollection(
    "appearances",
    require("./collections/appearances")
  );
  eleventyConfig.addCollection("channels", require("./collections/channels"));
  eleventyConfig.addCollection(
    "channelsAppearances",
    require("./collections/channelsAppearances")
  );
  eleventyConfig.addCollection("calendar", require("./collections/calendar"));
  eleventyConfig.addCollection("videos", require("./collections/videos"));
  eleventyConfig.addCollection("workshops", require("./collections/workshops"));
  eleventyConfig.addCollection("posts", require("./collections/posts"));
  eleventyConfig.addCollection("authors", require("./collections/authors"));
  eleventyConfig.addCollection(
    "authorsPostsPaged",
    require("./collections/authorsPostsPaged")
  );
  eleventyConfig.addCollection("tags", require("./collections/tags"));
  eleventyConfig.addCollection(
    "tagsPostsPaged",
    require("./collections/tagsPostsPaged")
  );
  eleventyConfig.addCollection(
    "caseStudies",
    require("./collections/caseStudies")
  );
  eleventyConfig.addCollection(
    "caseStudiesFeatured",
    require("./collections/caseStudiesFeatured")
  );
  eleventyConfig.addCollection("memoized", require("./collections/memoized"));

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  dayjs.extend(customParseFormat);

  eleventyConfig.addFilter("buttonText", function (text) {
    const split = text.split(" ");
    const last = split[split.length - 1];
    return text.replace(
      last,
      `<span class="cta-link__arrow-text">${last} <svg class="icon-arrow" focusable="false" aria-hidden="true" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.30425 0.5L0 1.8043L8.67415 10.4783L2.69546 10.0866L2.63068 11.8261L12 12.5L11.3261 3.13034L9.5867 3.19555L9.97797 9.17403L1.30425 0.5Z" fill="currentColor"/></svg></span>`
    );
  });

  eleventyConfig.addFilter("monthDayYear", function (date) {
    return dayjs(date).format("MMMM D, YYYY");
  });
  // robot friendly date format for crawlers
  eleventyConfig.addFilter("htmlDate", function (date) {
    return dayjs(date).format();
  });

  eleventyConfig.addFilter("console", function (value) {
    return util.inspect(value);
  });

  eleventyConfig.addFilter("findBySlug", function (slug) {
    return findBySlug(slug);
  });

  eleventyConfig.addFilter("formatTagline", function (tagline) {
    return tagline.split("</p>")[0].replace(/<\/?[^>]+(>|$)/g, "");
  });

  eleventyConfig.addFilter("stripHTML", (value) => {
    return value.replace(/(<([^>]+)>)/gi, "");
  });

  const mdRender = new markdownIt({});
  eleventyConfig.addFilter("markdown", function (value) {
    if (value) {
      return mdRender.render(value);
    }
    return "";
  });

  eleventyConfig.addFilter("filterByAttribute", (array, attribute, value) => {
    return array.filter((element) => element.data[attribute] === value);
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  /*
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === "production") {
    // Minify HTML when building for production
    eleventyConfig.addTransform("htmlmin", htmlMinTransform);
  }
  // Parse the page HTML content and perform some manipulation
  eleventyConfig.addTransform("contentParser", contentParser);

  /**
   * Add Plugins
   * @link https://github.com/11ty/eleventy-plugin-rss
   * @link https://github.com/11ty/eleventy-plugin-syntaxhighlight
   * @link https://github.com/okitavera/eleventy-plugin-pwa
   */
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  /**
   * Add Shortcodes
   */

  const now = new Date();
  eleventyConfig.addShortcode("copyrightYear", function () {
    return `${now.getFullYear()}`;
  });

  eleventyConfig.addShortcode("image", function (
    imgPath,
    alt,
    sizes,
    loading,
    className,
    sizesArray
  ) {
    let url = "./static" + imgPath;
    const fileType = path.extname(imgPath).replace(".", "");
    const directory = path.dirname(imgPath);
    let formats = ["webp", ...(fileType !== "gif" ? [fileType] : [])];

    if (!sizesArray) {
      sizesArray = [720, 1024, 1440];
    }

    const options = {
      svgShortCircuit: true,
      widths: sizesArray,
      formats,
      urlPath: directory,
      outputDir: "./dist/" + directory,
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(imgPath);
        const name = path.basename(imgPath, extension);
        return `${name}@${width}.${format}`;
      },
    };

    let stats = Image.statsSync(url, options);
    Image(url, options);

    let imageAttributes = {
      class: className,
      alt,
      sizes: sizes ? sizes : "100vw",
      loading: loading,
    };

    return Image.generateHTML(stats, imageAttributes);
  });

  eleventyConfig.addShortcode("svg", (svgPath) => {
    const svgData = fs.readFileSync("./static/assets/images" + svgPath, "utf8");
    const response = optimize(svgData, {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    });
    return response.data.replace(
      "<svg",
      `<svg focusable="false" role="presentation"`
    );
  });

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {
            "Content-Type": "text/html",
          });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  /*
   * Disable use gitignore for avoiding ignoring of /bundle folder during watch
   * https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore
   */
  eleventyConfig.setUseGitIgnore(false);

  /**
   * Eleventy configuration object
   */
  return {
    dir: {
      input: pathConfig.src,
      includes: pathConfig.includes,
      layouts: `${pathConfig.includes}/layouts`,
      output: pathConfig.output,
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
