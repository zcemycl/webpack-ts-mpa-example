import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import * as CleanPlugin from 'clean-webpack-plugin'

const config: Configuration = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new CleanPlugin.CleanWebpackPlugin(),
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
})

export default config
