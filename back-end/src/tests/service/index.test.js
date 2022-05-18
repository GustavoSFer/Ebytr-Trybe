const { expect } = require('chai');
const Sinon = require('sinon');
const listModel = require('../../Model/listModel');
const listService = require('../../Service/listService');
const { returnDb, taskBody } = require('../MockDb/task');

describe('Service', () => {
  describe('#find', () => {
    describe('Quando existe dados no banco', () => {
      before(() => {
        Sinon.stub(listModel, 'getAll').resolves(returnDb);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar uma lista quando tem dados no banco', async () => {
        const taskList = await listService.getAll();
        expect(taskList).to.deep.eq(returnDb);
      });
    });
    describe('Quando não existe dados no banco', () => {
      before(() => {
        Sinon.stub(listModel, 'getAll').resolves([]);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar um array vazio', async () => {
        const taskList = await listService.getAll();
        expect(taskList).to.be.empty;
      });
    });
  });




  describe('#create', () => {
    describe('Deve cadastrar uma nova tarefa', () => {
      before(() => {
        Sinon.stub(listModel, 'postList').resolves(returnDb[0]);
      });
      after(() => {
        Sinon.restore();
      });
      it('Deve retornar a tarefa cadastrada', async () => {
        const taskList = await listService.postList(taskBody);
        expect(taskList).to.deep.eq(returnDb[0]);
      });
    });
  });




});
