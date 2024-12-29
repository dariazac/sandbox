const yaml = require("js-yaml");

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const dirOutputPlugin = require("@11ty/eleventy-plugin-directory-output");


module.exports = function(eleventyConfig) {
    // Receives file contents, return parsed data
    eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(dirOutputPlugin, {
        // Customize columns
        columns: {
            filesize: true, // Use `false` to disable
            benchmark: true, // Use `false` to disable
        },

        // Will show in yellow if greater than this number of bytes
        warningFileSize: 400 * 1000,
    });

    // eleventyConfig.addPassthroughCopy("src/assets/imgs");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/_css");
    // eleventyConfig.addPassthroughCopy("src/assets/sass");
    
    // // Watch CSS files for changes
    // eleventyConfig.setBrowserSyncConfig({
    //     files: 'public/assets/_css/**/*.css'
    // });

    // eleventyConfig.addWatchTarget("src/assets/sass");

    eleventyConfig.addCollection('menus', function(collectionApi){
        return collectionApi.getFilteredByGlob('src/content/menus/pages/**/*.{html,njk}');
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: 'public',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}