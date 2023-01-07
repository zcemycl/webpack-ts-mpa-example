/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            new CleanPlugin.CleanWebpackPlugin(),
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: "[name].bundle.js",
        publicPath: 'dist'
    },
})
