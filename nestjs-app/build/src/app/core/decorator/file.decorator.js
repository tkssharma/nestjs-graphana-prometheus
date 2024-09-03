"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const swagger_1 = require("@nestjs/swagger");
const uploadFile = (fileName = 'file') => (target, propertyKey, descriptor) => {
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                [fileName]: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })(target, propertyKey, descriptor);
};
exports.uploadFile = uploadFile;
//# sourceMappingURL=file.decorator.js.map