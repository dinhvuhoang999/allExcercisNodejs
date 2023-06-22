const router = require('express').Router();
const controllerOrder = require('./controller');
const { checkPayOrder } = require('./validate');

const { handleValidate } = require('../../middleware');

router.post('/pay-order', checkPayOrder, handleValidate, controllerOrder.payOrder);
router.get('/:userId', controllerOrder.getOrder);

module.exports = router;