const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getProducts);

module.exports = router;