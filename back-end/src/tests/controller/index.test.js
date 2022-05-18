const { expect } = require('chai');
const Sinon = require('sinon');
// const chaiHttp = require('chai-http');

const { returnDb, taskBody } = require('../MockDb/task');
const service = require('../../Service/listService');
const listController = require('../../Controller/listController');

describe('Controller', function () {
  const response = {};
  const request = {};

  describe('#find', function () {
    before(function () {
      request.body = {};
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    it('Quando existe dados - Deve retornar o status 200', async function () {
      Sinon.stub(service, 'getAll').resolves(returnDb);
      await listController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    });
    it('Deve retornar um array vazio', async function () { // erro
      Sinon.stub(service, 'getAll').resolves([]);
      await listController.getAll(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });  
  });
  describe('#create', function () {
    describe('Cadastrando uma nova tarefa', function () {
      before(function () {
        request.body = { taskBody };
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
      });
      after(function () {
        Sinon.restore();
      });
      it('Deve retornar o status 201', async function () {
        Sinon.stub(service, 'postList').resolves(returnDb[0]);
        await listController.postList(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });
    });
  });
});
