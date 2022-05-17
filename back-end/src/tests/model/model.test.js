const listModel = require('../../Model/listModel');
const { returnDb, taskBody } = require('../MockDb/task');
const model = require('../../ConnectionMongo');

const { expect } = require('chai');
const Sinon = require('sinon');

describe('Model', () => {
  describe('#find', () => {
   describe('Quando existe dados no banco', () => {
    before(() => {
      Sinon.stub(model, 'find').resolves(returnDb);
    });
    after(() => {
      Sinon.restore();
    });
    it('Deve retornar uma lista quando tem dados no banco', async () => {
      const taskList = await listModel.getAll();
      expect(taskList).to.deep.eq(returnDb);
    });
   });
   describe('Quando não existe dados no banco', () => {
    before(() => {
      Sinon.stub(model, 'find').resolves([]);
    });
    after(() => {
      Sinon.restore();
    });
    it('Deve retornar um array vazio', async () => {
      const taskList = await listModel.getAll();
      expect(taskList).to.be.empty;
    });
  })
  });
});