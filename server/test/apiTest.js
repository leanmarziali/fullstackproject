// API Test cases using Supertest

var request = require('supertest');
var app = require('../app');

//==================== API Test ====================

/**
 * Testing get endpoint by giving an input message
 */
describe('GET /api/:message', function () {
    let message = 'Testing API GET Method with Supertest';
    it('Respond with json containing status and message properties', function (done) {
        request(app)
            .get(`/api/${message}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect({ // expecting specific response content
                "status": "OK",
                "message": message
             })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing post endpoint by requesting
 */
describe('POST /api/:message', function () {
    let message = "Testing API POST METHOD with Supertest";
    let data = {
        "message": message
    }
    it('respond with 404 Not Found', function (done) {
        request(app)
            .post(`/api/${message}`)
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect({ // expecting specific response content
                "status": "ERROR",
                "message": "This request resource could not be found."
             })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing put endpoint by requesting
 */
describe('PUT /api/:message', function () {
    let message = "Testing API PUT METHOD with Supertest";
    let data = {
        "message": message
    }
    it('respond with 404 Not Found', function (done) {
        request(app)
            .put(`/api/${message}`)
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect({ // expecting specific response content
                "status": "ERROR",
                "message": "This request resource could not be found."
             })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing delete endpoint by requesting
 */
describe('DELETE /api/:message', function () {
    let message = "Testing API DELETE METHOD with Supertest";
    let data = {
        "message": message
    }
    it('respond with 404 Not Found', function (done) {
        request(app)
            .delete(`/api/${message}`)
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect({ // expecting specific response content
                "status": "ERROR",
                "message": "This request resource could not be found."
             })
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});