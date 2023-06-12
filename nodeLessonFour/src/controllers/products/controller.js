const { Product } = require('../../models');

module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const listProducts = await Product.find({}).lean();
      return res.json({ data: listProducts })
    } catch (error) {
      next(error)
    }
  }
}