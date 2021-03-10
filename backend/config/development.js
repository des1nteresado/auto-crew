const DEVELOPMENT_CONFIG = {
  API_PREFIX: '/api',
  API_VERSION: '/v1',
  PORT: process.env.PORT || 3001,
  host: `http://localhost:${process.env.PORT || 3001}`,
  COOKIE_KEY: 'super_cookie_key',
};

export default DEVELOPMENT_CONFIG;
