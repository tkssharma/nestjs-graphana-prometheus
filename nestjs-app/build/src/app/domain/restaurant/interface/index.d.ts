export declare const UserData: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare const GetCurrentUser: (...dataOrPipes: (string | number | symbol | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
export declare function LogExecutionTime(): MethodDecorator;
export interface UserMetaData {
    auth0_id: string;
    email: string;
    roles: string[];
}
