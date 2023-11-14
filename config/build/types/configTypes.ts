export type BuildMode = "development" | "none" | "production";

export type BuildPaths = {
    entry: string,
    build: string,
    html: string,
    src: string,
}

export type EnvironmentOptions = {
    mode: BuildMode,
    port: number
}
 
export type BuildOptions = {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
    isDev: boolean;

}