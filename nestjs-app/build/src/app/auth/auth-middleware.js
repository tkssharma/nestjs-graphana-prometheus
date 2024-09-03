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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth-service");
let AuthMiddleware = class AuthMiddleware {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
    async use(req, _, next) {
        const { authorization } = req.headers;
        const { roles, email, auth0_id } = {
            roles: ['admin'],
            email: 'test@gmail.com',
            auth0_id: '23424',
        };
        req.user = { roles, email, auth0_id };
        next();
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.default])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth-middleware.js.map