"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_entity_1 = require("./restaurant/entity/restaurant.entity");
const restaurant_controller_1 = require("./restaurant/controller/restaurant.controller");
const restaurant_service_1 = require("./restaurant/services/restaurant.service");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("../controllers/app.controller");
const auth_middleware_1 = require("../auth/auth-middleware");
const auth_module_1 = require("../auth/auth.module");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const matrix_middleware_1 = require("../matrix/matrix.middleware");
let DomainModule = class DomainModule {
    constructor() {
        this.publicRoutes = [
            {
                path: `/health`,
                method: common_1.RequestMethod.GET,
            },
        ];
    }
    configure(consumer) {
        consumer.apply(matrix_middleware_1.CustomMetricsMiddleware).forRoutes('/restaurants');
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude(...this.publicRoutes)
            .forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
DomainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_prometheus_1.PrometheusModule.register({
                path: '/metrics',
            }),
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgres://api:development_pass@localhost:5432/test-api',
                synchronize: true,
                entities: [restaurant_entity_1.RestaurantEntity],
            }),
            typeorm_1.TypeOrmModule.forFeature([restaurant_entity_1.RestaurantEntity]),
        ],
        controllers: [restaurant_controller_1.RestaurantController, app_controller_1.HealthController],
        providers: [
            restaurant_service_1.RestaurantService,
            auth_middleware_1.AuthMiddleware,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: 'count',
                help: 'metric_help',
                labelNames: ['method', 'origin'],
            }),
            (0, nestjs_prometheus_1.makeGaugeProvider)({
                name: 'gauge',
                help: 'metric_help',
            }),
        ],
    })
], DomainModule);
exports.DomainModule = DomainModule;
//# sourceMappingURL=domain.module.js.map