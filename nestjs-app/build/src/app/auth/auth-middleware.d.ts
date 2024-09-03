import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import AuthService from './auth-service';
export declare class AuthMiddleware implements NestMiddleware {
    private authorizationService;
    constructor(authorizationService: AuthService);
    use(req: any, _: Response, next: NextFunction): Promise<void>;
}
