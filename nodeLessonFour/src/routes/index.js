const routes = require('express').Router();
const routesSCart = require('../controllers/S_Cart/route');
const routesProduct = require('../controllers/products/route');
const routesCart = require('../controllers/cart/route');

routes.use('/blogs', routesSCart);
routes.use('/products', routesProduct);
routes.use('/carts', routesCart);

module.exports = routes;