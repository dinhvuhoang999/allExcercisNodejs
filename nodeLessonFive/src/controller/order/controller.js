const { Cart, User, Product, Order } = require('../../model');

module.exports = {
  payForOrder: async (req, res, next) => {
    try {
      const { productId } = req.body;

      const product = await Product.findById(productId);
      const order = await Order.findOne({})

      if (!product) {
        return res.status(404).json({
          message: 'Product not found'
        });
      }
      const cart = await Cart.findOne({});
      const findProduct = cart.cartInfo.findIndex((cart) => {
        return productId === cart.productId
      })

      if (findProduct === -1) {
        return res.status(404).json({
          message: 'Product not found in cart'
        });
      }

      const findProductInOrder = order.products.findIndex((productItem) => {
        console.log(productItem);
        return productId === productItem.productId
      });

      if (findProductInOrder === -1) {
        order.products.push({
          productId
        })
        await order.save();
      } else {
        order.totalPrice = order.totalPrice + product.price
        await order.save();
      }

      return res.json({ messenger: "Add success order" })
    } catch (error) {
      next(error)
    }
  }
}