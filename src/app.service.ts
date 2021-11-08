import { HttpServer, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (
    private httpServer: HttpServer,
  ) {}


  /**
   * @param { type, url, body, params }
   * @description 统一请求
   */
   async httpRequest(type: string, url: any, requestParams: any) {

    const data = await this.httpServer[type](url, requestParams).toPromise();

    const result = {
      code: 200,
      message: '',
      data,
      name: AppService.name,
    }

    return result;
  }
}
