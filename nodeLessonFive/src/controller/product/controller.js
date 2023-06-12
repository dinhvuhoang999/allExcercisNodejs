const { Product, User } = require('../../model');

module.exports = {
  getListProduct: async (req, res, next) => {
    try {
      const listProduct = await Product.find({}).lean();

      return res.json({ data: listProduct })
    } catch (error) {
      next(error)
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const { name, description, quantity, price, image, author } = req.body;

      const newProducts = await Product.create({
        name,
        description,
        quantity,
        price,
        image,
        author,
      });

      return res.json({ data: newProducts })
    } catch (error) {
      next(error)
    }
  },
  updateProduct: async (req, res, next) => {
    try {

      const { name, description, quantity, price, image, author } = req.body;
      const user = await User.findById(author);
      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }

      await Product.updateOne({
        name,
        description,
        quantity,
        price,
        image,
        author,
      });
      return res.json({ message: "update success" })
    } catch (error) {
      next(error)
    }
  },
  deleteProduct: async (req, res, next) => {
    try {

      const { productId } = req.params;

      const user = await User.findById(productId);

      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }
      await Product.findByIdAndDelete(productId);

      return res.json({ message: "delete success" })
    } catch (error) {
      next(error)
    }
  }
}