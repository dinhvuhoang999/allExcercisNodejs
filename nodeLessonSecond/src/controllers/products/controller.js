module.exports = {
  newProducts: (req, res, next) => {
    try {
      return res.json(req.body)
    } catch (error) {
      next(error)
    }
  }
}