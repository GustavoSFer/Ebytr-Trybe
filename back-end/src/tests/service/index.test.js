const { expect } = require('chai');
const Sinon = require('sinon');
const listModel = require('../../Model/listModel');
const listService = require('../../Service/listService');
const { returnDb, taskBody } = require('../MockDb/task');

describe('Service', function () {
  describe('#find', function () {
    it('Deve retornar uma lista quando tem dados no banco', async function () {
      Sinon.stub(listModel, 'getAll').resolves(returnDb);
      const taskList = await listService.getAll();
      expect(taskList).to.deep.eq(returnDb);
      Sinon.restore();
    });
    it('Sem dados no Db deve retornar um array vazio', async function () {
      Sinon.stub(listModel, 'getAll').resolves([]);
      const taskList = await listService.getAll();
      expect(taskList).to.be.empty;
    });
  });
  describe('#create', function () {
    describe('Deve cadastrar uma nova tarefa', function () {
      it('Deve retornar a tarefa cadastrada', async function () {
        Sinon.stub(listModel, 'postList').resolves(returnDb[0]);
        const taskList = await listService.postList(taskBody);
        expect(taskList).to.deep.eq(returnDb[0]);
      });
    });
  });

  describe('#Update', function () {
    describe('Atualizando uma tarefa', function () {
      it('Deve ser possivel atualizar a tarefa', async function () {
        Sinon.stub(listModel, 'updateTask').resolves(returnDb[0]);
        const taskList = await listService.updateTask(
          { id: '6283rt5e7cf6a71f7ebc637a', status: 'feito' },
        );
        expect(taskList).to.deep.eq(returnDb[0]);
      });
    });
  });

    describe('#Deletando', function () {
      describe('Deletando uma tarefa', function () {
        it('Deve ser possivel remover a tarefa', async function () {
          Sinon.stub(listModel, 'remove').resolves({
            acknowledged: true,
            deletedCount: 1,
          });
          const taskList = await listService.remove('6283rt5e7cf6a71f7ebc637a');
          expect(taskList).to.deep.eq({ acknowledged: true, deletedCount: 1 });
        });
    });
  });
});
