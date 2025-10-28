const request = require('supertest');
const app = require('../src/index'); // Giả sử app được export từ index.js

// 🌐 API Test
describe('GET /api/v1/products', () => {
    test('should return 200 and an array of products', async () => {
        const response = await request(app).get('/api/v1/products');
        
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

// 🔐 API/Security Test (Mô phỏng check auth)
describe('POST /api/v1/products (Security Test)', () => {
    test('should return 401 when no Authorization header is provided', async () => {
        const response = await request(app).post('/api/v1/products').send({ name: 'Test' });
        
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe('Không có quyền truy cập');
    });
});
