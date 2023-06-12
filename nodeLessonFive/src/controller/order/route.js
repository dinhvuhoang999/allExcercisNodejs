const router = require('express').Router();
const controller = require('../order/controller');

router.post('/pay-order', controller.payForOrder);

module.exports = router; 