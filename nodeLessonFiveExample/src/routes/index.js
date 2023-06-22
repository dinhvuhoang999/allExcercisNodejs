const router = require('express').Router();
const productRouter = require('../controller/product/route');
const cartRouter = require('../controller/cart/route')
const orderRouter = require('../controller/order/route')

router.use('/products', productRouter)
router.use('/carts', cartRouter)
router.use('/order', orderRouter)

module.exports = router;