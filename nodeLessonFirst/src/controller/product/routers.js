const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getProducts);
router.get('/product/:id', controller.getProductDetail);
router.post('/new-product/:id/:product', controller.newProduct);
router.put('/edit-product/:id', controller.updateProduct);

module.exports = router;