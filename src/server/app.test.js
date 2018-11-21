import request from 'supertest';
import fetchMock from 'fetch-mock';

import app from './app';

fetchMock.get('/get_data', JSON.stringify({ users: [{ name: 'hello', bags: 3 }] }));

describe('Test server paths', () => {
  test('GET on / path', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('POST on /new path', async () => {
    const response = await request(app).post('/new?name=Bob&bags=3');
    expect(response.status).toBe(200);
  });

  test('POST error on /new path', async () => {
    const response = await request(app).post('/new');
    expect(response.status).toBe(400);
  });

  test('GET on /get_data path', async () => {
    const response = await request(app).get('/get_data');
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
  });
});
