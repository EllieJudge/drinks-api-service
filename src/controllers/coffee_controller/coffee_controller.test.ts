import request from 'supertest';
import { app } from '../../app';

test('GET /coffee should return an object with the default coffee name if no query paramaters are given', async () => {
    const res = await request(app)
        .get('/coffee')

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });
});

test('GET /coffee should return correct object', async () => {
    const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Latte' });

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });
});


test('GET /coffee should return correct object if given a different coffee name parameter', async () => {
    const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Mocha' });

    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Mocha',
    });
});

describe('Test coffeelover API endpoint request', () => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        const json = JSON.parse(res.text)
        expect(json).toEqual("I love coffee!")
        expect(res.text).toEqual('\"I love coffee!\"');
    });
});
