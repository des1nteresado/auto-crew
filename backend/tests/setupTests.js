const db = require('../db');

afterEach(async () => {
  await db.clearDatabase();
});

afterAll(async (done) => {
  await db.closeDatabase();
  done();
});
