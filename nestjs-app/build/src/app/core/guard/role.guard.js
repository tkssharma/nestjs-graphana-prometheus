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
exports.RolesGuard = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles = exports.Roles || (exports.Roles = {}));
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const roles = this.reflector.getAllAndMerge('roles', [
            context.getClass(),
            context.getHandler(),
        ]) || [];
        if (roles && roles.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const hasRole = () => user.roles.some((role) => !!roles.find((userRole) => userRole === role));
        console.log(roles, user.roles);
        return user && user.roles && hasRole();
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=role.guard.js.map