const request = require('supertest');

const app = require('../../../server.js');
const db = require('../../../db');
const User = require('../../../db/models/user');

afterEach(async () => {
  await db.clearDatabase();
});

afterAll(async (done) => {
  await db.closeDatabase();
  done();
});

describe('signUp endpoint', () => {
  it('creates a new user', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    request(app)
      .post('/api/auth/sign-up')
      .send(data)
      .expect(201)
      .then(async ({ body: { user, token, refreshToken } }) => {
        expect(user._id).toBeTruthy();
        expect(data.email).toBe(user.email);

        expect(token).toBeTruthy();
        expect(refreshToken).toBeTruthy();

        const createdUser = await User.findOne({ _id: user._id });
        expect(user.email).toBe(createdUser.email);
        expect(user.password).toBe(createdUser.password);
        done();
      });
  });

  it('returns 400 status when user already exists', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };
    await User.create(data);

    request(app)
      .post('/api/auth/sign-up')
      .send(data)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('User is already registered.');
        done();
      });
  });

  it('returns 400 status when email is invalid', async (done) => {
    const data = { email: 'testemail.com', password: 'test' };

    request(app)
      .post('/api/auth/sign-up')
      .send(data)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('Invalid email address.');
        done();
      });
  });
});
