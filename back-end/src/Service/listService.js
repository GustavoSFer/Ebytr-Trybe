const listModel = require('../Model/listModel');

const getAll = async () => {
  const list = await listModel.getAll();

  return list;
}

module.exports = {
  getAll,
}