const { Router } = require('express');
const listController = require('../Controller/listController');
const { validationTask } = require('../middleware/validationTask');

const route = Router();

route.get('/', listController.getAll);
route.post('/', validationTask, listController.postList);
route.put('/', listController.getAll);
route.delete('/', listController.getAll);

module.exports = route;