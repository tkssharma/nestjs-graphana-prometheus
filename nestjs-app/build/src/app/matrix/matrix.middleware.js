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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMetricsMiddleware = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
let CustomMetricsMiddleware = class CustomMetricsMiddleware {
    constructor(appCounter, appGauge) {
        this.appCounter = appCounter;
        this.appGauge = appGauge;
        this.customDurationGauge = new prom_client_1.Gauge({
            name: 'app_duration_metrics',
            help: 'app_concurrent_metrics_help',
            labelNames: ['app_method', 'app_origin', 'le'],
        });
        this.customErrorsCounter = new prom_client_1.Counter({
            name: 'app_error_metrics',
            help: 'app_usage_metrics_to_detect_errors',
            labelNames: ['app_method', 'app_origin', 'app_status'],
        });
    }
    use(req, res, next) {
        this.appCounter.labels(req.method, req.originalUrl).inc();
        this.appGauge.inc();
        const startTime = Date.now();
        res.on('finish', () => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            this.customDurationGauge
                .labels(req.method, req.originalUrl, (duration / 1000).toString())
                .set(duration);
            this.customErrorsCounter.labels(req.method, req.originalUrl, res.statusCode.toString()).inc();
        });
        next();
    }
};
CustomMetricsMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_prometheus_1.InjectMetric)('count')),
    __param(1, (0, nestjs_prometheus_1.InjectMetric)('gauge')),
    __metadata("design:paramtypes", [prom_client_1.Counter,
        prom_client_1.Gauge])
], CustomMetricsMiddleware);
exports.CustomMetricsMiddleware = CustomMetricsMiddleware;
//# sourceMappingURL=matrix.middleware.js.map