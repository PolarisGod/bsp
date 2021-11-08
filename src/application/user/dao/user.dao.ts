import { Inject, Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { User } from "src/database/entity/user.entity";

@Injectable()
export class UserDao {
  constructor(
    @Inject()
    private db: Connection,
  ) {}

  async find() {
    return await this.db.manager.find(User);
  }
  async save(option) {
    return await this.db.manager.save(User, option);
  }
  async delete(option) {
    return await this.db.manager.delete(User, option);
  }
  async update(option1, option2) {
    return await this.db.manager.update(User, option1, option2);
  }

  async findPasswordByUser(userName) {
    return await this.db.manager.findOne(User, userName);
  }

}