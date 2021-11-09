import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LoggerMiddleWare implements NestMiddleware{
  async use(req: any, res: any, next: NextFunction) {
    await next();
  }
  
}