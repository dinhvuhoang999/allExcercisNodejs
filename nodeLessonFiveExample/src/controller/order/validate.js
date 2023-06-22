const { body } = require('express-validator');

module.exports = {
  checkPayOrder: [
    body('userId')
      .notEmpty()
      .withMessage('userId is required')
      .isMongoId()
      .withMessage('userId must be a valid Mongo'),
    body('productIds')
      .notEmpty()
      .withMessage('productIds is required')
      .isArray()
      .withMessage('productIds must be a Array')
  ]
}