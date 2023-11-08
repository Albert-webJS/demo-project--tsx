import webpack from 'webpack'

import { BuildOptions } from "./types/configTypes";
import { webpackResolvers } from './webpackResolvers';
import { webpackRules } from './webpackRules';
import { webpackPlugins } from './webpackPlugins';
import { webpackDevServer } from './webpackDevServer';


export const webpackBundleConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options

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
          rules: webpackRules(options)
        },
        plugins: webpackPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? webpackDevServer(options) : undefined,
      }
}