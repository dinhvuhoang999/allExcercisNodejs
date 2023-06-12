const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getListCart);

module.exports = router;