import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { type BuildOptions } from './types/configTypes'

export const webpackDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    historyApiFallback: true
  }
}
