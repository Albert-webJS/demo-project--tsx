export type BuildMode = "development" | "none" | "production";

export type BuildPaths = {
    entry: string,
    build: string,
    html: string,
}

export type BuildOptions = {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean;

}