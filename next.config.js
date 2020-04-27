const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});

const settings = {
    pwa: {
        dest: 'public'
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};


const development = withMDX(settings);
const production = withMDX(withPWA(settings));


module.exports = process.env.NODE_ENV === 'development' ? development : production;


