const { body } = require('express-validator');

module.exports = {
  checkValidate: [
    body('name')
      .notEmpty().withMessage('name is required')
      .isString().withMessage('name must be string')
      .isLength({
        min: 6,
      }).withMessage('name must be min 6 '),
    body('className')
      .notEmpty().withMessage('class name is required')
      .isString().withMessage('className must be string')
      .isLength({ min: 3 }).withMessage('class name must be min 3'),
    body('subject')
      .notEmpty().withMessage('subject is required')
      .isArray().withMessage('subject must be an array').custom((e) => {
        e.map((e) => {
          if (typeof e !== 'string') {
            throw new Error('subject must be array of array of strings');
          }
        })
        return true;
      }),
    body('core')
      .notEmpty().withMessage('core is required')
      .isNumeric({ min: 1, max: 10 }).withMessage('core must be number min 1 max 10'),
    body('absent')
      .notEmpty().withMessage('absent is required')
      .isBoolean().withMessage('absent must be Boolean'),
  ],

  checkValidateAddStudent: [
    body('name')
      .notEmpty().withMessage('name is required')
      .isString().withMessage('name must be string')
      .isLength({
        min: 6,
      }).withMessage('name must be min 6 '),
    body('age')
      .notEmpty().withMessage('age is required')
      .isInt({ min: 1 }).withMessage('age must be integer min 1'),
    body('avatar')
      .notEmpty().withMessage('avatar is required')
      .isURL().withMessage('avatar must be url'),
    body('class')
      .notEmpty().withMessage('avatar is required')
      .isObject().withMessage('class must be obj').custom((e) => {
        if (!e.id) {
          throw new Error('class must be obj of id');
        }
        return true;
      }),
    body('averageScore')
      .notEmpty().withMessage('averageScore is required')
      .isNumeric({ min: 1, max: 10 }).withMessage('averageScore must be integer min 1 max 10'),
    body('subjects')
      .notEmpty().withMessage('subjects is required')
      .isObject().withMessage('subjects must be object').custom(e => {
        if (!e.id && !e.name) {
          throw new Error('subject must be obj of id and name');
        }
        return true;
      }),
  ]
}