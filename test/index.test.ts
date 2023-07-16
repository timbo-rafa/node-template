import supertest from 'supertest'
import app from '../index'

it('should raise server', function (done) {
  'use strict'

  supertest(app)
    .get('/')
    .expect(200)
    .end(done)
})