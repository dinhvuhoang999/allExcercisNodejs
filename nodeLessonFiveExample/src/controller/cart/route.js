const router = require('express').Router();
const controllerCart = require('./controller');
const { checkAddCart } = require('./vaildate');

const { handleValidate } = require('../../middleware');
router.get('/:userId', controllerCart.getCart);
router.post('/add-to-cart', checkAddCart, handleValidate, controllerCart.addToCart);

module.exports = router;