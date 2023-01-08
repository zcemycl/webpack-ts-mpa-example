/* eslint @typescript-eslint/no-var-requires: "off" */
const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Map output name with required js and css files.
 * index: [src/index.ts, assets/pages/index.css]
 * design1/index: [src/design1/index.ts, assets/pages/design1/index.css]
 */
const entry = glob.sync("src/**/index.ts")
    .reduce((x,y) => Object.assign(x, {
        [
            y.replace(/^src\//, '')
                .replace('.ts', '')]:
        [
            './'+y,
            './'+y.replace('src/','assets/pages/')
                .replace('.ts', '.css')
        ]
    }), {});

console.log(entry)
const htmlgens = Object.keys(entry).map(name => 
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/'+name+'.html',
        filename: name+'.html',
        chunks: [name]
    }))

module.exports = {
    entry,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css' // Generate css
        }),
        ...htmlgens
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'], 
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: /assets/,
                exclude: /node_modules/,
                sideEffects: true, 
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader'
                    },
                    "postcss-loader",
                    "sass-loader"
                    ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}
