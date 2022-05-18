const listModel = require('../Model/listModel');

const getAll = async () => {
  const list = await listModel.getAll();
  return list;
};

const postList = async (task, status) => {
  const addTask = await listModel.postList(task, status);
  return addTask;
};

module.exports = {
  getAll,
  postList,
};