import dotenv from 'dotenv';

import development from './development';
import production from './production';

dotenv.config();

const config = {
  development,
  production,
};

export default config[process.env.NODE_ENV || 'development'];
