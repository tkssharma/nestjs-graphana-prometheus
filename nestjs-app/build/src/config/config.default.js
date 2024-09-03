"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    env: 'production',
    db: {
        url: process.env.DATABASE_URL,
    },
    port: 3000,
    swagger: {
        username: '',
        password: '',
    },
    metabase: {
        siteUrl: '',
        secretKey: '',
    },
    azure: {
        fileUpload: {
            connectionString: '',
            containerName: '',
        },
    },
    auth: {
        jwksuri: 'https://auth.example.io/.well-known/jwks.json',
        audience: 'https://example.com/v1',
        tokenIssuer: 'https://auth.example.io/',
        authProvider: 'auth0',
    },
    logLevel: 'info',
    newRelicKey: '',
};
//# sourceMappingURL=config.default.js.map