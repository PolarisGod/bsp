import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SystemModule } from './application/system/system.module';
import { UserModule } from './application/user/user.module';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleWare } from './middle/log.middle';

@Module({
  imports: [ DatabaseModule, HttpModule, SystemModule, UserModule ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('application');
  }
}
