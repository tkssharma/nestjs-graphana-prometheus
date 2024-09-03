import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
export declare class DomainModule implements NestModule {
    publicRoutes: Array<RouteInfo>;
    configure(consumer: MiddlewareConsumer): void;
}
