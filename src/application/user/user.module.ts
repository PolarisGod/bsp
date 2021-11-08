import { forwardRef, Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { SystemModule } from "../system/system.module";
import { UserDao } from "./dao/user.dao";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [ DatabaseModule, forwardRef(() => SystemModule) ],
  providers: [ UserService, UserDao ],
  controllers: [ UserController ],
})

export class UserModule {}