/* eslint @typescript-eslint/no-var-requires: "off" */
const glob = require("glob");
const CopyPlugin = require('copy-webpack-plugin');
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
                .replace('.ts', '.css')]
    }), {});

console.log(entry)

module.exports = {
    entry,
    plugins: [
        new CopyPlugin({ // Copy all html files to dist according folder structure
            patterns: [
                {
                    from: 'public/**/*.html',
                    to({ absoluteFilename }) { // e.g. public/index.html
                        return absoluteFilename.replace('public/','dist/')
                      }
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css' // Generate css
        }),
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
