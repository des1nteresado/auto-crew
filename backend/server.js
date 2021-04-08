const express = require('express');
const cors = require('cors');

const router = require('./router/index.js');
const config = require('./config');
const { connectDatabase } = require('./db');

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.use(config.API_PREFIX, router);

module.exports = app;
