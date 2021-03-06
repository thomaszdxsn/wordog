module.exports = {
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
    ],
    stories: [
        '../components/*.stories.[tj]sx',
        '../components/**/*.stories.[tj]sx',
    ],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('babel-preset-react-app')],
                },
            },
        );
        config.resolve.extensions.push('.ts', '.tsx');
        return config
    },
};