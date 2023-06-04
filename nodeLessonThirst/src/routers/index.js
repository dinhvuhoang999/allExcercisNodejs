const router = require('express').Router();
const routerTShirts = require('../controller/tShirt/routers');
const routerClassB = require('../controller/classB/routers');

router.use('/t-shirts', routerTShirts);
router.use('/class-b', routerClassB);

module.exports = router;
