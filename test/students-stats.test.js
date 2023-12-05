import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src/index.js';

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Students Stats routes', () => {
  it('Should return array of student stats', (done) => {
    chai.request(server)
      .get('/students')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
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