import webpack from 'webpack'
import path from 'path'

import { webpackBundleConfig } from './config/build/webpackBundleConfig';
import { BuildPaths } from './config/build/types/configTypes';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = webpackBundleConfig({
  mode: "development",
  paths: paths,
  isDev
});


export default config;