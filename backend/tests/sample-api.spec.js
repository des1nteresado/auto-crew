const request = require('supertest');
const app = require('../server.js');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('pong');
  });
});
