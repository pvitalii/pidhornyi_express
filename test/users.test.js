import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src/index.js';

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Users routes', () => {
  it('Should return array of users', (done) => {
    chai.request(server)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        done();
      });
  });


  it('Should return user by his email', (done) => {
    chai.request(server)
      .get(`/users/vitaliipidhornyi@example.com`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        const firstName = res.body.firstName;
        expect(firstName).to.be.equal('Vitalii');
        done();
      });
  });


  it('Should return user not found error', (done) => {
    chai.request(server)
      .get(`/users/vitalii@example.com`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.equal('Resource was not found')
        done();
      });
  });


  it('Should post new user and return it', (done) => {
    const newUser = {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      email: 'cristianoronaldo@example.com',
      password: 'password123',
      age: 38,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA'
      },
      tags: [
        'Football',
      ]
    }
    chai.request(server)
      .post(`/users`)
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        const firstName = res.body.firstName;
        expect(firstName).to.be.equal('Cristiano');
        done();
      });
  });

  it('Should return bad request error due to wrong shape of user', (done) => {
    const newUser = {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      email: 'cristiano@example.com',
      password: 'password123',
      goals: 45
    }
    chai.request(server)
      .post(`/users`)
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.eql(['age is required', 'address is required', 'tags is required', 'goals is not allowed']);
        done();
      });
  });


  it('Should return bad request due to email already exists', (done) => {
    const newUser = {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      email: 'cristianoronaldo@example.com',
      password: 'password123',
      age: 38,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA'
      },
      tags: [
        'Football',
      ]
    }
    chai.request(server)
      .post(`/users`)
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.equal('User with this email already exists');
        done();
      });
  });


  it('Should patch user and return it', (done) => {
    chai.request(server)
      .patch(`/users/1`)
      .send({
        firstName: 'Lionel',
        lastName: 'Messi'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        const updatedObject = res.body;
        expect(updatedObject.id).to.be.equal(1);
        expect(updatedObject.firstName).to.be.equal('Lionel');
        expect(updatedObject.lastName).to.be.equal('Messi');
        done();
      });
  });


  it('Should delete user by his email', (done) => {
    chai.request(server)
      .delete(`/users/vitaliipidhornyi@example.com`)
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });
})