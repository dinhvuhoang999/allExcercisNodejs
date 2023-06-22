const router = require('express').Router();
const controllerProduct = require('./controller');
const { checkUpdateProduct } = require('./validate');

const { handleValidate } = require('../../middleware');


router.get('/', controllerProduct.getProducts)
router.post('/create-product', checkUpdateProduct, handleValidate, controllerProduct.createProduct)
router.put('/update-product/:product-id', checkUpdateProduct, handleValidate, controllerProduct.updateProduct)
router.delete('/delete-product/:productId', controllerProduct.deleteProduct)

module.exports = router;