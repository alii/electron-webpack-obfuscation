const merge = require('webpack-merge');

const baseConfig = require('./webpack.renderer.config');

module.exports = merge.smart(baseConfig, { devtool: 'hidden-source-map', mode: 'production' });
