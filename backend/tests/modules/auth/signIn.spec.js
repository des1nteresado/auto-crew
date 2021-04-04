const request = require('supertest');

const app = require('../../../server.js');
const db = require('../../../db');
const User = require('../../../db/models/user');

afterEach(async (done) => {
  await db.clearDatabase();
  done();
});

afterAll(async (done) => {
  await db.closeDatabase();
  done();
});

describe('POST /api/auth/sign-in', () => {
  it('login user correctly', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };
    await User.create(data);

    request(app)
      .post('/api/auth/sign-in')
      .send(data)
      .expect(200)
      .then(({ body: { user, token, refreshToken } }) => {
        expect(token).toBeTruthy();
        expect(refreshToken).toBeTruthy();

        expect(user._id).toBeTruthy();
        expect(data.email).toBe(user.email);
        done();
      });
  });

  it('returns 404 when user does not exist', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    request(app)
      .post('/api/auth/sign-in')
      .send(data)
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe('User does not exist.');
        done();
      });
  });

  it('returns 401 when username or password is invalid', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };
    await User.create(data);

    request(app)
      .post('/api/auth/sign-in')
      .send({ ...data, password: 'bad password' })
      .expect(401)
      .then(({ body: { message } }) => {
        expect(message).toBe('Username or password is invalid.');
        done();
      });
  });
});
