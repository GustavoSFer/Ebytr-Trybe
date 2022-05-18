const model = require('../ConnectionMongo');

const getAll = async () => {
  const list = await model.find();

  return list;
};

const postList = async (task, status) => {
  const addTask = await model.create({ task, status, date: new Date() });

  return addTask;
};

module.exports = {
  getAll,
  postList,
};