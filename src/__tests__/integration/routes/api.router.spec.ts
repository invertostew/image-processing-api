import supertest from 'supertest';

import app from '../../../app';

const request = supertest(app);

describe('Test endpoint responses', () => {

  it('GET /api/images endpoint 200 OK', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });

});
