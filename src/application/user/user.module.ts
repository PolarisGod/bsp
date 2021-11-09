import { forwardRef, Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserDao } from "./dao/user.dao";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [ DatabaseModule ],
  providers: [ UserService, UserDao ],
  controllers: [ UserController ],
  exports: [ UserService ]
})

export class UserModule {}