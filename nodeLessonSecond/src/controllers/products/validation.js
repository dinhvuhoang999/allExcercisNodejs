const { body } = require('express-validator');

module.exports = {
  checkValidation: [
    body('title')
      .notEmpty()
      .withMessage('Title is required')
      .isString()
      .withMessage('title must be string'),
    body('quantity')
      .notEmpty()
      .withMessage('quantity is required')
      .isInt()
      .withMessage('quantity must be int number'),
    body('previewImage')
      .isURL()
      .withMessage('previewImage must be a url'),
    body('brand')
      .isArray()
      .withMessage('brand must be a array'),
    body('shipping')
      .isObject()
      .withMessage('shipping must be a Object with properties'),
    body('start')
      .isNumeric()
      .withMessage('start must be a number'),

  ]
}