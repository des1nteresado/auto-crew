import dotenv from 'dotenv';

import development from './development';

dotenv.config();

const config = {
  development,
};

export default config[process.env.NODE_ENV || 'development'];
