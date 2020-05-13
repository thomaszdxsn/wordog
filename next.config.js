const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});


const settings = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};


module.exports = withMDX(settings);
