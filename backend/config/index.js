const dotenv = require('dotenv');

const development = require('./development');
const production = require('./production');

dotenv.config();

const config = {
  development,
  production,
  test: development,
};

module.exports = config[process.env.NODE_ENV || 'development'];
