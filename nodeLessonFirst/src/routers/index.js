const router = require('express').Router();
const postRouter = require('../controller/post/routers');
const productRouter = require('../controller/product/routers');

router.use('/posts', postRouter);
router.use('/products', productRouter)


module.exports = router;