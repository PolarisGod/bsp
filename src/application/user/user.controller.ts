import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
    ) {}

  // 用户列表
  @Post('/list')
  async getUsers() {
    return await this.userService.getUsers();
  }
}