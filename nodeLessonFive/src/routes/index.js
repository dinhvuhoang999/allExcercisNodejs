const router = require('express').Router();

const routeProduct = require('../controller/product/route');
const routeCart = require('../controller/cart/route');
const routeOrder = require('../controller/order/route');

router.use("/products", routeProduct)
router.use("/cart", routeCart)
router.use("/order", routeOrder)

module.exports = router;