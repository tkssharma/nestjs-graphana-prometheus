"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.bootstrap = void 0;
require('module-alias/register');
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const restaurant_service_1 = require("./app/domain/restaurant/services/restaurant.service");
let cachedApp;
const bootstrap = async (context) => {
    if (!cachedApp) {
        const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
        cachedApp = app;
    }
    return cachedApp;
};
exports.bootstrap = bootstrap;
const handle = async (event, context) => {
    try {
        console.log(event, context);
        cachedApp = await (0, exports.bootstrap)(context);
        const eventHandler = cachedApp.get(restaurant_service_1.RestaurantService);
        await eventHandler.search({
            page: 1,
            limit: 30,
            latitude: '',
            longitude: '',
            search_text: '',
        });
    }
    catch (err) {
        throw err;
    }
};
exports.handle = handle;
(0, exports.handle)();
//# sourceMappingURL=standalone.js.map