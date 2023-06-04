const { query, validationResult } = require('express-validator');

module.exports = {
  checkLogin: [
    query('username').notEmpty().withMessage('username not empty'),
    query('password').notEmpty().withMessage('password not empty'),
  ]
}