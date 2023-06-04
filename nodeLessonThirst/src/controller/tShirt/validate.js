const { body } = require('express-validator');

module.exports = {
  checkValidate: [
    body('name').notEmpty().withMessage('name is required')
      .isString().withMessage('name must be string')
      .isLength({
        min: 6,
        max: 30,
      }).withMessage('name must be min 6 max 30'),
    body('quantity').notEmpty().withMessage('quantity is required')
      .isInt().withMessage('quantity must be integer number')
      .isLength({
        min: 0,
        max: 1000
      }).withMessage("quantity must be min 0 max 1000"),
    body('color').notEmpty().withMessage('colors is required')
      .isArray().withMessage('colors must be array')
      .custom((e) => {
        e.map((e) => {
          if (typeof e !== 'string') {
            throw new Error('colors must be array of array of strings');
          }
        })
        return true
      }),
    body('image').notEmpty().withMessage("image is required")
      .isURL().withMessage('image must be URL'),
    body('categories').notEmpty().withMessage('colors is required')
      .isArray().withMessage('colors must be array')
      .custom((e) => {
        e.map((e) => {
          if (!e.id) {
            throw new Error('categories must be array of array of strings id');
          }
        })
        return true
      }),
  ]
}