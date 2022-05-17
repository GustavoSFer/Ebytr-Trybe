const { expect } = require('chai');
const Sinon = require('sinon');
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
        const taskList = await listController.getAll(request, response);
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
        const taskList = await listController.getAll(request, response);
        expect(response.json.calledWith([])).to.be.equal(true);
      });
    });
  });
});