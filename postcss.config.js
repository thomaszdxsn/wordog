module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},

        ...(process.env.NODE_ENV === "production"
            ? {
                "@fullhuman/postcss-purgecss": {
                    content: [
                        "./components/**/*.*",
                        "./pages/**/*.*",
                        "./public/**/*.*",
                    ],
                    defaultExtractor: (content) =>
                        content.match(/[\w-/.:]+(?<!:)/g) || [],
                },
            }
            : {}),
    },
};