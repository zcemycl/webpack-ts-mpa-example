/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: "[name].bundle.js",
    },
})
