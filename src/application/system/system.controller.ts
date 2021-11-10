import { Body, Controller, Post } from "@nestjs/common";
import { responseFormat } from "src/untils/tools";
import { Login } from "./system.dto";
import { SystemService } from "./system.service";

@Controller('system')
export class SystemController {
  constructor(
    private systemService: SystemService,
  ) {}

  @Post('login')
  async login(@Body() body: Login) {
    const result = await this.systemService.login(body);
    return responseFormat(result);
  }
}