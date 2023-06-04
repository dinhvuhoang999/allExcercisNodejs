const routes = require('express').Router();
const controllers = require('./controller');
const { checkValidation } = require('./validation');
const { handleValidation } = require('../../middlewares');

routes.post('/new-products', checkValidation, handleValidation, controllers.newProducts);

module.exports = routes;