"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogExecutionTime = exports.GetCurrentUser = exports.UserData = void 0;
const common_1 = require("@nestjs/common");
exports.UserData = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user === null || user === void 0 ? void 0 : user[data] : user;
});
exports.GetCurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!data) {
        return request.user;
    }
    return request.user[data];
});
const common_2 = require("@nestjs/common");
function LogExecutionTime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const startTime = Date.now();
            const result = await originalMethod.apply(this, args);
            const endTime = Date.now();
            const executionTime = endTime - startTime;
            common_2.Logger.log(`Method ${propertyKey} execution time: ${executionTime}ms`, target.constructor.name);
            return result;
        };
        return descriptor;
    };
}
exports.LogExecutionTime = LogExecutionTime;
//# sourceMappingURL=index.js.map