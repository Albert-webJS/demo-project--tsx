import { BuildOptions } from "./types/configTypes"
import { Configuration as DevServerConfiguration } from "webpack-dev-server"

export const webpackDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        historyApiFallback: true
    }
}