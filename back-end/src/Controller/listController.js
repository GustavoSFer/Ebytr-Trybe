const service = require('../Service/listService');

const getAll = async (_req, res) => {
  const list = await service.getAll();

  return res.status(200).json(list);
};

const postList = async (req, res) => {
  const { task, status } = req.body;
  const addTask = await service.postList(task, status);

  return res.status(201).json(addTask);
};

const updateTask = async (req, res) => {
  const { id, status } = req.body;
  const updatingTask = await service.updateTask(id, status);

  return res.status(200).json(updatingTask);
};

const remove = async (req, res) => {
  const { id } = req.body;
  const removeTask = await service.remove(id);

  res.status(200).json(removeTask);
};

module.exports = {
  getAll,
  postList,
  updateTask,
  remove,
};