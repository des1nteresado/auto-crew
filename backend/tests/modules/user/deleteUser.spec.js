const request = require('supertest');

const app = require('../../../server.js');
const db = require('../../../db');
const User = require('../../../db/models/user');
const { userProvider } = require('../../../db/providers');
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

describe('DELETE /api/user/:userId', () => {
  it('delete user correctly (user)', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .delete(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .expect(200)
      .then(async ({ body: { _id } }) => {
        const user = await userProvider.getById(_id);

        expect(user).toBeNull();
        done();
      });
  });

  it('delete user correctly (admin)', async (done) => {
    const user = { email: 'test@email.com', password: 'test' };
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdUser = await User.create(user);
    const createdAdmin = await User.create(admin);

    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .delete(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .expect(200)
      .then(async ({ body: { _id } }) => {
        const deletedUser = await userProvider.getById(_id);

        expect(deletedUser).toBeNull();
        done();
      });
  });

  it('returns 400 when admin tries delete user with invalid userId', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .delete(`/api/user/12345`)
      .set('authorization', `Bearer ${token}`)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('Provided userId is no valid.');
        done();
      });
  });

  it('returns 404 when admin tries delete undefined user', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .delete(`/api/user/60699cdeb534fea96dacc4c0`)
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
      .delete(`/api/user/${createdUser._id}`)
      .expect(401)
      .then(({ body: { message } }) => {
        expect(message).toBe('Unauthorized');
        done();
      });
  });

  it('returns 403 when user tries delete another user', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .delete(`/api/user/60699cdeb534fea96dacc4c0`)
      .set('authorization', `Bearer ${token}`)
      .expect(403)
      .then(({ body: { message } }) => {
        expect(message).toBe('Forbidden');
        done();
      });
  });
});
