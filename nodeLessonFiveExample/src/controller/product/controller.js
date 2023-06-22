const { Product } = require('../../models')
module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const products = await Product.find();
      return res.json({ messenger: "ok", data: products })
    } catch (error) {
      next(error)
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const { name, description, quantity, price, image, previewImage, author } = req.body;

      const newProduct = await Product.create({ name, description, quantity, price, image, previewImage, author })
      return res.json({ data: newProduct })
    } catch (error) {
      next(error)
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const { name, description, quantity, price, image, previewImage, author } = req.body;

      await Product.updateOne({ name, description, quantity, price, image, previewImage, author })
      return res.json({ messenger: "update success" })
    } catch (error) {
      next(error)
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const { productId } = req.params;

      await Product.findByIdAndDelete(productId)
      return res.json({ messenger: "delete success" })
    } catch (error) {
      next(error)
    }
  }
}