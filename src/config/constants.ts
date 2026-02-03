import path from 'path';
import { fileURLToPath } from 'url';

// Vercel injects variables automatically, so we remove the manual dotenv.config() call 
// that uses process.cwd() as it can cause runtime crashes on serverless.

export const SERVER = {
  PORT: parseInt(process.env.PORT || '3000', 10),
  HOST: process.env.HOST || 'localhost',
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
};

export const PROXY = {
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || ['*'],
  MAX_REQUEST_SIZE: parseInt(process.env.MAX_REQUEST_SIZE || '10485760', 10),
  ALLOWED_DOMAINS: process.env.ALLOWED_DOMAINS?.split(',').filter(Boolean) || [],
  REQUEST_TIMEOUT: parseInt(process.env.REQUEST_TIMEOUT || '30000', 10),
  ENABLE_DOMAIN_WHITELIST: process.env.ENABLE_DOMAIN_WHITELIST === 'true',
};

export const LOGGING = {
  LEVEL: process.env.LOG_LEVEL || 'info',
};

export const ROUTES = {
  PROXY_BASE: '/proxy',
};

export default { SERVER, PROXY, LOGGING, ROUTES };
