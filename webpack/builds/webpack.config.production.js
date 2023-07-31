const webpackConfig = require('./webpack.config.common')
const TerserPlugin = require("terser-webpack-plugin");


webpackConfig.optimization = {
    ...webpackConfig.optimization,
    minimize: true,
    minimizer: [new TerserPlugin()],
}

module.exports = webpackConfig