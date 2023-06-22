const { body } = require('express-validator');

module.exports = {
  checkAddCart: [
    body('userId')
      .notEmpty()
      .withMessage('userId is required')
      .isMongoId()
      .withMessage('userId must be a valid Mongo'),
    body('productId')
      .notEmpty()
      .withMessage('productId is required')
      .isMongoId()
      .withMessage('productId must be a valid Mongo'),
    body('quantity')
      .notEmpty()
      .withMessage('quantity is required')
      .isInt()
      .withMessage('quantity must be an integer'),
  ]
}