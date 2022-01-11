import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
// import * as morgan from 'morgan';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  // app.use(morgan('tiny'));
  await app.listen(3000);
  logger.log(`Application running on 3000`);
}
bootstrap();
