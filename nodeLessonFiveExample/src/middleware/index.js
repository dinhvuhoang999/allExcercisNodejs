const { validationResult } = require('express-validator');

module.exports = {
  handleValidate: function (req, res, next) {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return next();
    }

    return res.send({
      errors: result.array({
        onlyFirstError: true
      })
    });
  },
}