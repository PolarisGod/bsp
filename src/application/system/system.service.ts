import { Inject, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Injectable()
export class SystemService {
  constructor(
    @Inject()
    private userService: UserService,
  ) {}

  async login(body) {
    const result: any = await this.validateUser(body);
    if (result) {
      return { code: 0, message: '登录成功!', data: result }
    }
    return { code: -1, message: '登录失败!', data: result }
  }

  async validateUser(body) {
    const { userName, password } = body;
    let flag = true;
    const userInfo = await this.userService.getPasswordByUser(userName);
    if (userInfo[0].password !== password) {
      flag = false;
    }
    return flag;
  }
}