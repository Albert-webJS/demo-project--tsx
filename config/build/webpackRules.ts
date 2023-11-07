import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/configTypes';

export const webpackRules = (options: BuildOptions): webpack.RuleSetRule[] => {

    const cssLoader = {
      test: /\.css$/i,
      use: [options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: options.isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          },
          
        },
      }],
    }
  
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
       typescriptLoader,
       cssLoader
      ]
}