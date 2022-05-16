const model = require('../ConnectionMongo');

const getAll = async () => {
  const list = await model.find();

  return list;
}

module.exports = {
  getAll,
}