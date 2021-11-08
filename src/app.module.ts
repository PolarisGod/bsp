import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemModule } from './application/system/system.module';
import { UserModule } from './application/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ DatabaseModule, HttpModule, SystemModule, UserModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
