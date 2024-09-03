export interface ConfigDBData {
    url?: string;
}
export interface FileUpload {
    connectionString?: string;
    containerName?: string;
}
export interface SwaggerUserConfig {
    username?: string;
    password?: string;
}
export interface MetabaseConfig {
    siteUrl?: string;
    secretKey?: string;
}
export interface AzureConfig {
    fileUpload: FileUpload;
}
export interface ConfigAuthData {
    jwksuri: string;
    audience?: string;
    tokenIssuer: string;
    authProvider: string;
}
export interface ConfigAuthorizationData {
    baseUrl: string;
    serviceClientToken: string;
}
export interface Notifications {
    baseUrl: string;
    token: string;
}
export interface ConfigData {
    env: string;
    port: number;
    auth: ConfigAuthData;
    db: ConfigDBData;
    azure: AzureConfig;
    swagger: SwaggerUserConfig;
    metabase: MetabaseConfig;
    logLevel: string;
    newRelicKey?: string;
}
