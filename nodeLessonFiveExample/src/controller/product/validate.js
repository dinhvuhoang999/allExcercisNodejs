const { body } = require('express-validator');

module.exports = {
  checkUpdateProduct: [
    body('name')
      .notEmpty()
      .withMessage('name is required'),
    body('description')
      .notEmpty()
      .withMessage('description is required'),
    body('quantity')
      .notEmpty()
      .withMessage('quantity is required')
      .isInt()
      .withMessage('quantity must be an integer and min 0'),
    body('price')
      .notEmpty()
      .withMessage('quantity is required')
      .isInt()
      .withMessage('quantity must be an integer'),
    body('image')
      .isArray()
      .withMessage('image must be a Array').custom((e) => {
        e.map((e) => {
          if (typeof e !== 'string') {
            throw new Error('image must be array of strings');
          }
        })
        return true
      }),
    body('previewImage')
      .isURL()
      .withMessage('previewImage must be a URL'),
    body('author')
      .notEmpty()
      .withMessage('author is required')
      .isMongoId()
      .withMessage('author must be a valid Mongo')
  ]
}