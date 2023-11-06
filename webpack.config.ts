import webpack from 'webpack'
import path from 'path'

import { webpackBundleConfig } from './config/build/webpackBundleConfig';
import { BuildPaths, EnvironmentOptions } from './config/build/types/configTypes';




export default (env: EnvironmentOptions) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = webpackBundleConfig({
    mode,
    paths: paths,
    isDev,
    port: PORT
  });

  return config;
};