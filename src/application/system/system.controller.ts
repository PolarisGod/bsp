import { Body, Controller, Inject, Post } from "@nestjs/common";
import { responseFormat } from "src/untils/tools";
import { SystemService } from "./system.service";

@Controller('system')
export class SystemController {
  constructor(
    private systemService: SystemService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const result = await this.systemService.login(body);
    return responseFormat(result);
  }
}