const service = require('../Service/listService');

const getAll = async (_req, res) => {
  const list = await service.getAll();

  return res.status(200).json(list);
};

const postList = async(req, res) => {
  const { task, status } = req.body;
  const addTask = await service.postList(task, status);

  return res.status(201).json(addTask);
}

module.exports = {
  getAll,
  postList,
}