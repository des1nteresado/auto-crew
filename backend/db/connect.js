const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(`Mongoose default connection error: ${error}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
