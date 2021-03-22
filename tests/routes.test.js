const request = require("supertest");
const app = require("../src/app");


jest.mock("../src/entities/hero", () => {
    return {
        find: jest.fn().mockReturnValue([{}])
    }
})


test('test get heroes sucessfull request', async function(done) {
    //const getHeroes = jest.spyOn(Hero, 'find');
    const response = await request(app).get('/hero');
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({"heroes": [{}]});

    done();
});
