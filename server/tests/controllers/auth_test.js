import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import { generateToken } from '../../helpers/util';

chai.use(chaiHttp);
const { expect } = chai;

const users = [
  {
    id: 1234,
    first_name: 'William',
    last_name: 'ishimwe',
    email: 'ishimwewil005@gmail.com',
    password: '1234',
    is_admin: false,
  },
  {
    id: 12345,
    first_name: 'X',
    last_name: 'Y',
    email: 'XY@gmail.com',
    password: '1234',
    is_admin: true,
  },
];

describe('signup', () => {
  describe('POST ', () => {
    // it should validate inputs
    it('should validate inputs', (done) => {
      chai.request(app)
        .post('/auth/signup/')
        // .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${generateToken()}`)
        .send(users[0])
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.statusCode).to.equal(201);
          expect(res.body.data.token).to.be.a('string');
          expect(res.body.data.first_name).to.equal(users[0].first_name);
          expect(res.body.data.last_name).to.equal(users[0].last_name);
          expect(res.body.data.email).to.equal(users[0].email);
          done();
        });
    });
    // it should add user to users[]
    // it should return OK on success
    // it should return internal server error on faile
  });
});
