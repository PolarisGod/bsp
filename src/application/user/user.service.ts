import { Inject, Injectable } from "@nestjs/common";
import { UserDao } from "./dao/user.dao";

@Injectable()
export class UserService {
  constructor(
    @Inject()
    private userDao: UserDao,
  ) {}

  async getUsers() {
    return await this.userDao.find();
  }

  async getPasswordByUser(userName) {
    return await this.userDao.findPasswordByUser(userName);
  }
}