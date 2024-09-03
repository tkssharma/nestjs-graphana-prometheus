import { ConfigData } from './config.interface';
export declare class ConfigService {
    private config;
    constructor(data?: ConfigData);
    loadFromEnv(): void;
    private parseConfigFromEnv;
    private parseMetabaseConfigFromEnv;
    private parseAzureConfigFromEnv;
    private parseSwaggerConfigFromEnv;
    private parseDbConfigFromEnv;
    private parseAuthConfigFromEnv;
    get(): Readonly<ConfigData>;
}
