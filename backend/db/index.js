const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();
const isTestEnvironment = process.env.NODE_ENV === 'test';

module.exports.connectDatabase = () => {
  if (isTestEnvironment) {
    mongod.start().then(() => {
      mongoose.createConnection(mongod.getUri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
      });
    });
  }

  mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

const db = mongoose.connection;

module.exports.closeDatabase = async () => {
  await db.dropDatabase();
  await db.close();
  await mongoose.disconnect();
  await mongod.stop();
};

module.exports.clearDatabase = async () => {
  Object.keys(db.collections).forEach(async (key) => {
    const collection = db.collections[key];
    await collection.deleteMany();
  });
};

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
