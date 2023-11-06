import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { BuildOptions } from './types/configTypes'


export const webpackPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
    
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
      ]

    return plugins
}