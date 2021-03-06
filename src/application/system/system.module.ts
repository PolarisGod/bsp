import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { SystemController } from "./system.controller";
import { SystemService } from "./system.service";

@Module({
  imports: [ UserModule ],
  providers: [ SystemService ],
  controllers: [ SystemController ],
})

export class SystemModule {
  constructor (
    private readonly systemService: SystemService
  ) {

  }
}