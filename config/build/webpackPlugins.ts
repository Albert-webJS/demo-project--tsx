import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export const webpackPlugins = (path: string): webpack.WebpackPluginInstance[] => {
    
    const plugins = [
        new HtmlWebpackPlugin({ template: path }),
        new webpack.ProgressPlugin(),
      ]

    return plugins
}