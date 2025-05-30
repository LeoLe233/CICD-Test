const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with json containing a message and timestamp', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
  });
}); 