import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Logger } from '../../../logger/logger';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: Logger);
    catch(exception: any, host: ArgumentsHost): void;
}
