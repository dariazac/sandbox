module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css");
    // eleventyConfig.addPassthroughCopy("src/assets/imgs");
    
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