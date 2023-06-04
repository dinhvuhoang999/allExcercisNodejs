const router = require('express').Router();
const authController = require('../controller/auth');
const middleware = require('../middleware');
const validator = require('../controller/validation');

router.get('/login', validator.checkLogin, middleware.handleValidationError, authController.login);

module.exports = router;