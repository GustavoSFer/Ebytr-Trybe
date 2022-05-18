const { expect } = require('chai');
const Sinon = require('sinon');
const listModel = require('../../Model/listModel');
const { returnDb, taskBody } = require('../MockDb/task');
const model = require('../../ConnectionMongo');

describe('Model', function () {
  describe('#find', function () {
    afterEach(Sinon.restore);
    it('Quando existe dados no DB deve retornar um array com as informações', async function () {
      Sinon.stub(model, 'find').resolves(returnDb);
      const taskList = await listModel.getAll();
      expect(taskList).to.deep.eq(returnDb);
      // Sinon.restore();
    });
    it('Quando não existe dados no DB deve retornar um array vazio', async function () {
      Sinon.stub(model, 'find').resolves([]);
      const taskList = await listModel.getAll();
      expect(taskList).to.be.empty;
    });
  });
  describe('#create', function () {
    describe('Cadastrando uma nova tarefa', function () {
      it('Deve ser cadastrado a nova tarefa', async function () {
        Sinon.stub(model, 'create').resolves(returnDb[0]);

        const taskList = await listModel.postList(taskBody);
        expect(taskList).to.deep.eq(returnDb[0]);
      });
    });
  });

  describe('#Update', function () {
    describe('Atualizando tarefa', function () {
      it('Deve ser possivel atualizar a tarefa', async function () {
        Sinon.stub(model, 'updateOne').resolves(returnDb[1]);

        const taskList = await listModel.updateTask(taskBody);
        expect(taskList).to.deep.equal(returnDb[1]);
      });
    });
  });

  describe('#Delete', function () {
    describe('Deletando uma tarefa', function () {
      it('Deve ser possivel remover uma tarefa', async function () {
        Sinon.stub(model, 'deleteOne').resolves(returnDb[1]);

        const taskList = await listModel.remove('6283rt5e7cf6a71f7ebc637a');
        expect(taskList).to.deep.equal(returnDb[1]);
      });
    });
  });
});
