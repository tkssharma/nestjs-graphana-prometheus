"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocument = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_config_1 = require("./swagger.config");
const SWAGGER_ENVS = ['local', 'development', 'production'];
function createDocument(app) {
    const builder = new swagger_1.DocumentBuilder()
        .setTitle(swagger_config_1.SWAGGER_CONFIG.title)
        .setDescription(swagger_config_1.SWAGGER_CONFIG.description)
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'authorization')
        .setVersion(swagger_config_1.SWAGGER_CONFIG.version);
    for (const tag of swagger_config_1.SWAGGER_CONFIG.tags) {
        builder.addTag(tag);
    }
    const options = builder.build();
    if (true) {
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('docs', app, document);
    }
}
exports.createDocument = createDocument;
//# sourceMappingURL=swagger.js.map