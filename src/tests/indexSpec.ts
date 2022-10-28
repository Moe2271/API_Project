import supertest from 'supertest';
import app from '../Main';

const request = supertest(app);

describe('Test endpoint ', () => {
  it('get the api ', async () => {
    const response = await request.get('/api/250/250/fjord.jpg');
    expect(response.status).toBe(404);
  });
});
