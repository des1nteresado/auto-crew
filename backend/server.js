import express from 'express';

import router from './router';
import config from './config';

import './db';

const app = express();

app.use(express.json());

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.use(config.API_PREFIX, router);

app.listen(config.PORT, () => {
  console.log(process.env.NODE_ENV, 'env');
  console.log(`> Ready on http://localhost:${config.PORT}`);
});
