import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { Counter, Gauge } from 'prom-client';
import { Request } from "express";
export declare class CustomMetricsMiddleware implements NestMiddleware {
    appCounter: Counter<string>;
    appGauge: Gauge<string>;
    customDurationGauge: Gauge<string>;
    customErrorsCounter: Counter<string>;
    constructor(appCounter: Counter<string>, appGauge: Gauge<string>);
    use(req: Request, res: Response, next: NextFunction): void;
}
