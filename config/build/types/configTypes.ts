export type BuildMode = 'development' | 'none' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface EnvironmentOptions {
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isDev: boolean

}
