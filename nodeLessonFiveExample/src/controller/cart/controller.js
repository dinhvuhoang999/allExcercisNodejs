const { Product, Cart } = require('../../models')
module.exports = {
  getCart: async (req, res, next) => {
    try {
      const { userId } = req.params;
      console.log(req.params);
      const cart = await Cart.findOne({ userId })

      return res.json({ messenger: "ok", data: cart })
    } catch (error) {
      next(error)
    }
  },
  addToCart: async (req, res, next) => {
    try {
      const { productId, userId, quantity } = req.body;

      const product = await Product.findById(productId);
      const cart = await Cart.findOne({ userId });

      if (!product) {
        return res.status(404).json({
          message: 'Product not found'
        })
      }
      console.log(cart);
      const findCart = cart.cartInfo.findIndex((item) => (
        item.productId.toString() === productId.toString()
      ));

      if (findCart === -1) {
        cart.cartInfo.push({
          productId: productId,
          quantity: quantity,
        })
      } else {
        cart.cartInfo[findCart].quantity += quantity
        console.log(cart.cartInfo[findCart]);

      }
      await cart.save();

      return res.json({ messenger: 'add success', data: cart })
    } catch (error) {
      next(error)
    }
  },
}