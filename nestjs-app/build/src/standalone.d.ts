import { SNSHandler, Context } from 'aws-lambda';
import { INestApplicationContext } from '@nestjs/common';
export declare const bootstrap: (context: Context) => Promise<INestApplicationContext>;
export declare const handle: SNSHandler;
