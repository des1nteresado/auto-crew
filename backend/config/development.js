const DEVELOPMENT_CONFIG = {
  API_PREFIX: '/api',
  API_VERSION: '/v1',
  PORT: process.env.PORT || 3001,
  host: `http://localhost:${process.env.PORT || 3001}`,
};

module.exports = DEVELOPMENT_CONFIG;
