import request from 'supertest';
import { app } from '../../app';

test('GET /tea should return an object with the default tea name if no query paramaters are given', async () => {
    const res = await request(app)
        .get('/tea')

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Breakfast',
    });
});


test('GET /teaLover should return the correct string', async () => {
    const res = await request(app)
        .get('/tea')

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Breakfast',
    });
});

describe('Test tealover API endpoint request', () => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/tealover');
        expect(res.statusCode).toEqual(200);
        const json = JSON.parse(res.text)
        expect(json).toEqual("I love tea!")
        expect(res.text).toEqual('\"I love tea!\"');
    });
});