import { createConnection } from "typeorm";

const dotenv = require('dotenv');
dotenv.config('../env');
const env = process.env;

const bsp: any = {
  type: env.DB_DIALECT,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DBNAME,
  synchronize: false,
  dateStrings: true
}

export const databaseProviders = [
  {
    provide: 'bsp_db',
    useFactory: async () => await createConnection(bsp),
  },
]