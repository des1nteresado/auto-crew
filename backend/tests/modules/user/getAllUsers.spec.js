const request = require('supertest');

const app = require('../../../server.js');
const db = require('../../../db');
const User = require('../../../db/models/user');
const { generateAccessTokens } = require('../../../src/utils/index.js');
const { USER_ROLES } = require('../../../src/constants/index.js');

afterEach(async (done) => {
  await db.clearDatabase();
  done();
});

afterAll(async (done) => {
  await db.closeDatabase();
  done();
});

describe('GET /api/user', () => {
  it('get all users correctly (admin)', async (done) => {
    const user = { email: 'test@email.com', password: 'test' };
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    await User.create(user);
    const createdAdmin = await User.create(admin);

    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .get(`/api/user`)
      .set('authorization', `Bearer ${token}`)
      .expect(200)
      .then(({ body: { users, pageCount } }) => {
        expect(users.length).toBe(2);
        expect(pageCount).toBe(1);

        done();
      });
  });

  it('returns 403 when regular user tries get list of users', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .get(`/api/user`)
      .set('authorization', `Bearer ${token}`)
      .expect(403)
      .then(({ body: { message } }) => {
        expect(message).toBe('Forbidden');
        done();
      });
  });

  it('returns 401 when user tries send request without auth headers', async (done) => {
    request(app)
      .get(`/api/user`)
      .expect(401)
      .then(({ body: { message } }) => {
        expect(message).toBe('Unauthorized');
        done();
      });
  });
});
