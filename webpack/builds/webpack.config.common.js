const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const rules = require('../rules');
const plugins = require('../plugins')

const webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: rules,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'vendor-react',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'source-map',
    plugins: plugins,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};

module.exports = webpackConfig