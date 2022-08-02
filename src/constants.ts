import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import * as env from 'env-var';

export const APP_NAME = 'interview-wemo-backend';
export const PORT = env.get('PORT').default(3000).asPortNumber();
export const DB_HOST = env.get('DB_HOST').default('postgres').asString();
export const DB_PORT = env.get('DB_PORT').default(3000).asPortNumber();
export const DB_USER = env.get('DB_USER').required().asString();
export const DB_PASSWORD = env.get('DB_PASSWORD').required().asString();
export const DB_SYNC = env.get('DB_SYNC').default('false').asBool();
export const DB_NAME = 'wemo';
