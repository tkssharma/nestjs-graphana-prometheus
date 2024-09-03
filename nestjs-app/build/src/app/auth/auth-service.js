"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const JwksClient = require("jwks-rsa");
const app_constants_1 = require("../app.constants");
const util = require("util");
let AuthService = class AuthService {
    async init(authToken) {
        const tokenString = this.getToken(authToken);
        const decode = this.decodeToken(tokenString);
        const client = JwksClient({
            jwksUri: 'https://tkssharma.auth0.com/.well-known/jwks.json',
            rateLimit: app_constants_1.JKWS_RATE_LIMIT,
            cache: app_constants_1.JKWS_CACHE,
            jwksRequestsPerMinute: app_constants_1.JKWS_REQUESTS_PER_MINUTE,
        });
        const getSignKey = util.promisify(client.getSigningKey);
        try {
            const key = await getSignKey(decode.header.kid);
            const signingKey = key.publicKey || key.rsaPublicKey;
            return this.verify(tokenString, signingKey, decode);
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'UNAUTHORIZED' }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async verify(tokenString, signingKey, decoded) {
        try {
            jwt.verify(tokenString, signingKey);
            const { payload } = decoded;
            const metaLink = 'https://tkssharma.com';
            return {
                roles: payload['https://tkssharma.com/roles'],
                email: payload.email,
                auth0_id: payload.sub,
            };
        }
        catch (err) {
            throw new common_1.HttpException({ message: 'UNAUTHORIZED' }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    decodeToken(tokenString) {
        const decoded = jwt.decode(tokenString, { complete: true, json: true });
        if (!decoded || !decoded.header || !decoded.header.kid) {
            throw new common_1.HttpException({ message: 'INVALID_AUTH_TOKEN' }, common_1.HttpStatus.UNAUTHORIZED);
        }
        return decoded;
    }
    getToken(authToken) {
        const match = authToken.match(/^Bearer (.*)$/);
        if (!match || match.length < 2) {
            throw new common_1.HttpException({ message: 'INVALID_BEARER_TOKEN' }, common_1.HttpStatus.UNAUTHORIZED);
        }
        return match[1];
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth-service.js.map