import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src/index.js';

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Students Stats routes', () => {
  it('Should return student stats by id', (done) => {
    chai.request(server)
      .get('/students/2')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.name).to.be.equal('Vitalii Pidhornyi');
        done();
      });
  });


  it('Should return student stats not found error', (done) => {
    chai.request(server)
      .get(`/students/125`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.equal('Resource was not found');
        done();
      });
  });


  it('Should return student stats with the worst homework score', (done) => {
    chai.request(server)
      .get(`/students/worst-homework`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.name).to.be.equal('Cristiano Ronaldo');
        done();
      });
  });
})