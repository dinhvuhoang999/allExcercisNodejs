const { query, validationResult } = require('express-validator');

validateHandlerError = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(req.body);
  }

  res.send({ errors: result.array() });
}

module.exports = validateHandlerError;