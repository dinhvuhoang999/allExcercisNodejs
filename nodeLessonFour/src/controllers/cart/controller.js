const { Cart, User } = require('../../models')

module.exports = {
  getListCart: async (req, res, next) => {
    try {
      const cartList = await Cart.find({}).lean();

      return res.json({ data: cartList })
    } catch (error) {
      next(error)
    }
  },
  addToCart: async (req, res, next) => {
    try {
      // const { userId, productId, quantity } = req.body;

      // const cart = await Cart.findOne({ userId });

      // if (!cart) {
      //   return res.status(404).json({
      //     message: 'Cart not found'
      //   })
      // }

      // const productIndex = cart.cartInfo.findIndex(
      //   (e) => e.productId.toString() === productId.toString())

      // if (productIndex === -1) {
      //   cart.cartInfo.push({
      //     productId,
      //     quantity
      //   })
      // } else {
      //   cart.cartInfo[productIndex].quantity += quantity
      // }

      // await cart.save();

      return res.json({ messenger: "aaa" })
    } catch (error) {
      next(error)
    }
  }
}