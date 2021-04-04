const request = require('supertest');

const app = require('../../../server.js');
const db = require('../../../db');
const User = require('../../../db/models/user');
const { generateAccessTokens } = require('../../../src/utils/index.js');
const { USER_ROLES } = require('../../../src/constants/index.js');

afterEach(async () => {
  await db.clearDatabase();
});

afterAll(async (done) => {
  await db.closeDatabase();
  done();
});

describe('GET /api/user/:userId', () => {
  it('get user data correctly (regular)', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .get(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .expect(200)
      .then(({ body: { role, email, password } }) => {
        expect(role).toBe(createdUser.role);
        expect(email).toBe(createdUser.email);
        expect(password).toBe(createdUser.password);

        done();
      });
  });

  it('get data of any user correctly (admin)', async (done) => {
    const user = { email: 'test@email.com', password: 'test' };
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdUser = await User.create(user);
    const createdAdmin = await User.create(admin);

    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .get(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .expect(200)
      .then(({ body: { role, email, password } }) => {
        expect(role).toBe(createdUser.role);
        expect(email).toBe(createdUser.email);
        expect(password).toBe(createdUser.password);

        done();
      });
  });

  it('returns 400 when admin tries get user data with invalid userId', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .get(`/api/user/12345`)
      .set('authorization', `Bearer ${token}`)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('Provided userId is no valid.');
        done();
      });
  });

  it('returns 404 when admin tries get data of undefined user', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .get(`/api/user/60699cdeb534fea96dacc4c0`)
      .set('authorization', `Bearer ${token}`)
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe('User does not exist.');
        done();
      });
  });

  it('returns 401 when user tries send request without auth headers', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };
    const createdUser = await User.create(data);

    request(app)
      .get(`/api/user/${createdUser._id}`)
      .expect(401)
      .then(({ body: { message } }) => {
        expect(message).toBe('Unauthorized');
        done();
      });
  });

  it('returns 403 regular user tries get data of another user', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .get(`/api/user/60699cdeb534fea96dacc4c0`)
      .set('authorization', `Bearer ${token}`)
      .expect(403)
      .then(({ body: { message } }) => {
        expect(message).toBe('Forbidden');
        done();
      });
  });
});
