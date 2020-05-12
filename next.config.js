const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});


const settings = {
    pwa: {
        dest: 'public'
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};


module.exports = withMDX(settings);
