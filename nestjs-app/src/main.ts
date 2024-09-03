require('module-alias/register');

require('dotenv').config();
import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from '@core/interceptor/app.interceptor';
import { createDocument } from './swagger/swagger';
import { RestaurantService } from '@domain/restaurant/services/restaurant.service';
const LISTEN_PORT = 3000;
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
) {
  require('newrelic');
}
const NEST_LOGGING = true;
async function bootstrap() {
  const opts: NestApplicationOptions = {};
  if (!NEST_LOGGING) {
    opts.logger = false;
  }
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    exposedHeaders: 'X-Document-Name',
  });
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());
  console.log(process.env.DATABASE_URL)
  createDocument(app);
  await app.listen(process.env.PORT || LISTEN_PORT);
}
bootstrap();
