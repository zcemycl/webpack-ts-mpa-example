import { Configuration } from 'webpack'
import path from 'path'
import glob from 'glob'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * Map output name with required js and css files.
 * index: [src/index.ts, assets/pages/index.css]
 * design1/index: [src/design1/index.ts, assets/pages/design1/index.css]
 */

const entry = glob.sync('src/pages/**/index.ts').reduce(
  (x: object, y: string) =>
    Object.assign(x, {
      [y.replace(/^src\/pages\//, '').replace('.ts', '')]: [
        './' + y,
        './' + y.replace('src/pages/', 'assets/pages/').replace('.ts', '.css'),
      ],
    }),
  {}
)

console.log(entry)
const htmlgens = Object.keys(entry).map(
  name =>
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/pages/' + name + '.html',
      filename: name + '.html',
      chunks: [name],
    })
)

const common: Configuration = {
  entry,
  plugins: [
    new webpack.ProvidePlugin({
      globals: path.resolve(__dirname, 'src/utils/index.ts'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Generate css
    }),
    ...htmlgens,
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /assets/,
        exclude: /node_modules/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: (url: string, resourcePath: string, context: string) => {
                const relativePath = path.relative(context, resourcePath)
                const tmp = relativePath.replace(/^src\/pages\//, '')
                const res = tmp.replace(tmp.slice(tmp.lastIndexOf('/') + 1), url)
                return res
              },
              name: '[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
}

export default common
