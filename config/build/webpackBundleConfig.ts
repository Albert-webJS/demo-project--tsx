import webpack from 'webpack'
import path from 'path';

import { BuildOptions } from "./types/configTypes";
import { webpackResolvers } from './webpackResolvers';
import { webpackRules } from './webpackRules';
import { webpackPlugins } from './webpackPlugins';


export const webpackBundleConfig = ({ mode, paths }: BuildOptions): webpack.Configuration => {
    return {
        mode: mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        resolve: webpackResolvers(),
        module: {
          rules: webpackRules()
        },
        plugins: webpackPlugins(paths.html)
      }
}