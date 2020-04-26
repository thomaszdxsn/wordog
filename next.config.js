const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})


module.exports = withMDX(withPWA({
    pwa: {
        dest: 'public'
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}))

