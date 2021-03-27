const app = require('./server');
const config = require('./config');

app.listen(config.PORT, () => {
  console.log(`> Ready on http://localhost:${config.PORT}`);
});
