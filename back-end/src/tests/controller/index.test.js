const { expect } = require('chai');
const Sinon = require('sinon');
// const chaiHttp = require('chai-http');

const { returnDb, taskBody } = require('../MockDb/task');
const service = require('../../Service/listService');
const listController = require('../../Controller/listController');

describe('Controller', () => {
  const response = {};
  const request = {};

  describe('#find', () => {
    describe('Quando existe dados no banco', () => {
      before(() => {
        request.body = {};
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(service, 'getAll').resolves(returnDb);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar o status 200', async () => {
        await listController.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
    describe('Quando não existe dados no banco', () => {
      before(() => {
        request.body = {};
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(service, 'getAll').resolves([]);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar um array vazio', async () => {
        await listController.getAll(request, response);
        expect(response.json.calledWith([])).to.be.equal(true);
      });
    });
  });
  describe('#create', () => {
    describe('Cadastrando uma nova tarefa', () => {
      before(() => {
        request.body = {taskBody};
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(service, 'postList').resolves(returnDb[0]);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar o status 201', async () => {
        await listController.postList(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });
    });
  });

});
