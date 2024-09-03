"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
require('dotenv').config();
const core_1 = require("@nestjs/core");
const helmet = require("helmet");
const app_module_1 = require("./app/app.module");
const swagger_1 = require("./swagger/swagger");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const LISTEN_PORT = 3000;
if (process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'development') {
    require('newrelic');
}
const NEST_LOGGING = true;
async function bootstrap() {
    const opts = {};
    if (!NEST_LOGGING) {
        opts.logger = false;
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.enableCors({
        exposedHeaders: 'X-Document-Name',
    });
    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.contentSecurityPolicy());
    (0, swagger_1.createDocument)(app);
    await app.listen(process.env.PORT || LISTEN_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map