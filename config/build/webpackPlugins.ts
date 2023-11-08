import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BuildOptions } from './types/configTypes'


export const webpackPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
    
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        })
      ]

    return plugins
}