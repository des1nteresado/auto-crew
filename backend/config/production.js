const DEVELOPMENT_CONFIG = {
  API_PREFIX: '/api',
  API_VERSION: '/v1',
  PORT: process.env.PORT || 8080,
  host: `http://localhost:${process.env.PORT || 8080}`,
};

export default DEVELOPMENT_CONFIG;
