import supertest from 'supertest';

import app from '../../../app';

const request = supertest(app);

describe('Test endpoint responses', () => {

  it('GET /api/images with missing arguments produces 400 status code', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toEqual(400);
  });

  it('GET /api/images with correct arguments produces 200 status code', async () => {
    const response = await request.get('/api/images?filename=filename&width=200&height=200');
    expect(response.status).toEqual(200);
  });

});
