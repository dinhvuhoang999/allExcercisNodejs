const routes = require('express').Router();
const routerProducts = require('../controllers/products/routers')

routes.use('/products', routerProducts)

module.exports = routes;

