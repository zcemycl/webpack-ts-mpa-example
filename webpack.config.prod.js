const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');
const glob = require("glob");

const entry = glob.sync("src/**/*.ts")
    .reduce((x,y) => Object.assign(x, {
        [y.replace(/^src\//, '').replace('.ts', '')]:'./'+y,
    }), {});

console.log(entry)

module.exports = {
    mode: 'production',
    entry,
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: './'
                }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
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
    // devtool: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', 
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};