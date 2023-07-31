const devConfig = require('./webpack/builds/webpack.config.dev')
const prodConfig = require('./webpack/builds/webpack.config.production')

const webpackConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

module.exports = webpackConfig