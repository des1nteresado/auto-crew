const express = require('express');

const router = require('./router/index.js');
const config = require('./config');
require('./db');

const app = express();

app.use(express.json());

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.use(config.API_PREFIX, router);

module.exports = app;
