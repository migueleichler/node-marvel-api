const request = require("supertest");
const app = require("../src/app");

test('test get heroes sucessfull request', () => {
    return request(app)
        .get('/hero')
        .then(response => {
            expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
            expect(response.statusCode).toBe(200);
        });
});
