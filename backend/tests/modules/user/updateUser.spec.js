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

describe('PUT /api/user/:userId', () => {
  it('update user correctly (user)', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    const newData = {
      email: 'test@email.com',
      newEmail: 'test2@email.com',
      currentPassword: 'test',
      newPassword: '234',
      firstName: 'firstname',
      lastName: 'lastname',
    };

    request(app)
      .put(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .send(newData)
      .expect(200)
      .then(async ({ body: { email, firstName, lastName } }) => {
        expect(newData.newEmail).toBe(email);
        expect(newData.firstName).toBe(firstName);
        expect(newData.lastName).toBe(lastName);

        done();
      });
  });

  it('update user correctly (admin)', async (done) => {
    const user = { email: 'test@email.com', password: 'test' };
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdUser = await User.create(user);
    const createdAdmin = await User.create(admin);

    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    const newData = {
      email: 'test@email.com',
      newEmail: 'test2@email.com',
      currentPassword: 'test',
      newPassword: '234',
      firstName: 'firstname',
      lastName: 'lastname',
    };

    request(app)
      .put(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .send(newData)
      .expect(200)
      .then(async ({ body: { email, firstName, lastName } }) => {
        expect(newData.newEmail).toBe(email);
        expect(newData.firstName).toBe(firstName);
        expect(newData.lastName).toBe(lastName);

        done();
      });
  });

  it('returns 400 when user tries update password with invalid currentPassword', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    const newData = {
      email: 'test@email.com',
      newEmail: 'test2@email.com',
      currentPassword: '123test',
      newPassword: '234',
      firstName: 'firstname',
      lastName: 'lastname',
    };

    request(app)
      .put(`/api/user/${createdUser._id}`)
      .set('authorization', `Bearer ${token}`)
      .send(newData)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('Current password is invalid.');
        done();
      });
  });

  it('returns 400 when admin tries update user with invalid userId', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .put(`/api/user/12345`)
      .set('authorization', `Bearer ${token}`)
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe('Provided userId is no valid.');
        done();
      });
  });

  it('returns 404 when admin tries update undefined user', async (done) => {
    const admin = { email: 'admin@email.com', password: 'test', role: USER_ROLES.ADMIN };

    const createdAdmin = await User.create(admin);
    const { token } = generateAccessTokens(createdAdmin._id, createdAdmin.role);

    request(app)
      .put(`/api/user/60699cdeb534fea96dacc4c0`)
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
      .put(`/api/user/${createdUser._id}`)
      .expect(401)
      .then(({ body: { message } }) => {
        expect(message).toBe('Unauthorized');
        done();
      });
  });

  it('returns 403 when user tries update another user', async (done) => {
    const data = { email: 'test@email.com', password: 'test' };

    const createdUser = await User.create(data);
    const { token } = generateAccessTokens(createdUser._id, createdUser.role);

    request(app)
      .put(`/api/user/60699cdeb534fea96dacc4c0`)
      .set('authorization', `Bearer ${token}`)
      .expect(403)
      .then(({ body: { message } }) => {
        expect(message).toBe('Forbidden');
        done();
      });
  });
});
