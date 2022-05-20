const { Router } = require('express');
const listController = require('../Controller/listController');
const { validationPost, validationPut } = require('../middleware/validationTask');

const route = Router();

route.get('/', listController.getAll);
route.post('/', validationPost, listController.postList);
route.put('/', validationPut, listController.updateTask);
route.delete('/:id', listController.remove); // No axios o Delete precisa ser feito como parametro, não chega o body

module.exports = route;