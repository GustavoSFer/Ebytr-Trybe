const { Router } = require('express')
const listController = require('../Controller/listController');
;
const route = Router();

route.get('/', listController.getAll);
route.post('/', listController.postList);
route.put('/', listController.getAll);
route.delete('/', listController.getAll);

module.exports = route;