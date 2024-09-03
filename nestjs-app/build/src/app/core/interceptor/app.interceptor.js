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
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../../logger/logger");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        var _a;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        this.logger.error(exception);
        const message = exception instanceof common_1.BadRequestException
            ? (_a = exception.getResponse()) === null || _a === void 0 ? void 0 : _a.message
            : exception.message;
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            status,
            coorelationId: request.correlationId,
            message,
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [logger_1.Logger])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=app.interceptor.js.map