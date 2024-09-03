"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const url_join_ts_1 = require("url-join-ts");
const config_default_1 = require("./config.default");
let ConfigService = class ConfigService {
    constructor(data = config_default_1.DEFAULT_CONFIG) {
        this.config = data;
    }
    loadFromEnv() {
        this.config = this.parseConfigFromEnv(process.env);
    }
    parseConfigFromEnv(env) {
        return {
            env: env.NODE_ENV || config_default_1.DEFAULT_CONFIG.env,
            port: parseInt(env.PORT, 10),
            db: this.parseDbConfigFromEnv(env, config_default_1.DEFAULT_CONFIG.db),
            logLevel: env.LOG_LEVEL || config_default_1.DEFAULT_CONFIG.logLevel,
            newRelicKey: env.NEW_RELIC_KEY || config_default_1.DEFAULT_CONFIG.newRelicKey,
            auth: this.parseAuthConfigFromEnv(env),
            azure: this.parseAzureConfigFromEnv(env, config_default_1.DEFAULT_CONFIG.azure),
            swagger: this.parseSwaggerConfigFromEnv(env, config_default_1.DEFAULT_CONFIG.swagger),
            metabase: this.parseMetabaseConfigFromEnv(env),
        };
    }
    parseMetabaseConfigFromEnv(env) {
        return {
            siteUrl: env.METABASE_SITE_URL,
            secretKey: env.METABASE_SECRET_KEY,
        };
    }
    parseAzureConfigFromEnv(env, defaultConfig) {
        return {
            fileUpload: {
                connectionString: env.AZURE_FILE_STORAGE_CONNECTION_STRING ||
                    defaultConfig.fileUpload.connectionString,
                containerName: env.AZURE_FILE_STORAGE_CONTAINER_NAME ||
                    defaultConfig.fileUpload.containerName,
            },
        };
    }
    parseSwaggerConfigFromEnv(env, defaultConfig) {
        return {
            username: env.SWAGGER_USERNAME || defaultConfig.username,
            password: env.SWAGGER_PASSWORD || defaultConfig.password,
        };
    }
    parseDbConfigFromEnv(env, defaultConfig) {
        return {
            url: env.DATABASE_URL || defaultConfig.url,
        };
    }
    parseAuthConfigFromEnv(env) {
        let jwksUrl = env.AUTH0_JWKS_URL || env.JWKS_URI || config_default_1.DEFAULT_CONFIG.auth.jwksuri;
        if (!/\/\.well-known\/jwks\.json$/i.test(jwksUrl)) {
            jwksUrl = (0, url_join_ts_1.urlJoin)(jwksUrl, '.well-known', 'jwks.json');
        }
        return {
            jwksuri: jwksUrl,
            audience: env.AUTH0_AUDIENCE_URL || env.AUDIENCE || config_default_1.DEFAULT_CONFIG.auth.audience,
            tokenIssuer: env.AUTH0_TOKEN_ISSUER_URL ||
                env.TOKEN_ISSUER ||
                config_default_1.DEFAULT_CONFIG.auth.tokenIssuer,
            authProvider: env.AUTH_PROVIDER || config_default_1.DEFAULT_CONFIG.auth.authProvider,
        };
    }
    get() {
        return this.config;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map