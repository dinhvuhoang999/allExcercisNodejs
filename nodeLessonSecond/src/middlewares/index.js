const { query, validationResult } = require('express-validator');

module.exports = {
  handleValidation: (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }

    res.send({ errors: result.array() });
  }
}