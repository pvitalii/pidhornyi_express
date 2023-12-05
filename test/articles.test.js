import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../src/index.js';

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Articles routes', () => {
  it('Should return array of articles', (done) => {
    chai.request(server)
      .get('/articles')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });


  it('Should post new article and return it', (done) => {
    const newArticle = {
      name: 'Test Article',
      description: 'Test Description',
      type: 'f',
      tags: ['Sales', 'Marketing']
    }
    chai.request(server)
      .post(`/articles`)
      .send(newArticle)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        const name = res.body.name;
        expect(name).to.be.equal('Test Article');
        done();
      });
  });


  it('Should patch article`s tags and return article', (done) => {
    chai.request(server)
      .patch(`/articles/1`)
      .send({
        tags: ['Programming']
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        const updatedObject = res.body;
        expect(updatedObject.id).to.be.equal(1);
        expect(updatedObject.tags).to.be.eql(['Programming']);
        done();
      });
  });


  it('Should return bad request error due to wrong shape of article`s patch', (done) => {
    chai.request(server)
      .patch(`/articles/1`)
      .send({
        tags: ['Programming'],
        news: ['putin died']
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.eql(['news is not allowed']);
        done();
      });
  });


  it('Should return article not found error', (done) => {
    chai.request(server)
      .patch(`/articles/125`)
      .send({
        tags: ['Programming'],
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.message).to.be.equal('Resource was not found');
        done();
      });
  });
})