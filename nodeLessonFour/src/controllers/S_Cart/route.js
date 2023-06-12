const routes = require('express').Router();
const controller = require('./controller');

routes.get('/', controller.getBlogList)
routes.post('/create', controller.createPost);

module.exports = routes;