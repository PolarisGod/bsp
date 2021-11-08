export enum StatusCode {
  SUCCESS = 0,
  PARAMTER_ERR = 10,
  BAD_REQUEST = 20,
  DB_ERR = 30,
  UNAUTHORIZED_ERR = 40,
  THIRD_PARTY_SERVICE_ERR = 50,
  UNKNOW_ERR = 99
}

export enum ModuleCode {
  UnknowService = 999,
  ApplicationService = 101,
  DictionaryService = 102,
  FileService = 103,
  LogsService = 104,
  MqttService = 105,
  UserService = 106,
  ValidationPipe = 107,
  LoggerMiddleware = 108,
  TransformInterceptor = 109,
  AuthGuard = 110,
  HttpExceptionFilter = 111,
}
