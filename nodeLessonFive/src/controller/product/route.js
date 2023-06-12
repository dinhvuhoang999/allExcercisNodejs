const router = require('express').Router();
const controller = require('../product/controller');

router.get('/', controller.getListProduct);
router.post('/create-product', controller.createProduct)
router.put('/update-product/:product-id', controller.updateProduct)
router.delete('/delete-product/:productId', controller.deleteProduct)

module.exports = router; 