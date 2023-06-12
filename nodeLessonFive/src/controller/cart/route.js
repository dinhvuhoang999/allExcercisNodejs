const router = require('express').Router();
const controller = require('../cart/controller');

router.get('/', controller.getViewCart);
router.post('/add-to-cart', controller.addToCart);
router.delete('/delete-cart/:productId', controller.deleteCart)

module.exports = router; 