import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // 全局异常处理
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  Logger.log('app启动成功!');
}
bootstrap();
