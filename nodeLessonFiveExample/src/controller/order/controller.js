const { User, Cart, Order, Product } = require('../../models')
module.exports = {
  getOrder: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const order = await Order.findOne({ userId })

      return res.json({ messenger: "ok", data: order })
    } catch (error) {
      next(error)
    }
  },
  payOrder: async (req, res, next) => {
    try {
      const { productIds, userId } = req.body;

      const user = User.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        })
      }

      const removeAllSameItem = [...new Set(productIds)]
      console.log('removeAllSameItem', removeAllSameItem);
      const newProduct = []
      for (const productId of removeAllSameItem.values()) {
        newProduct.push(productId)
      }
      const cart = await Cart.findOne({ userId });
      let products = [];
      let totalPrice = 0;

      for (const productId of removeAllSameItem.values()) {
        const product = await Product.findById(productId);
        const findCart = cart.cartInfo.findIndex((item) => (
          item.productId.toString() === productId.toString()
        ));

        if (findCart === -1) {
          return res.status(404).json({
            message: 'Cart not found',
          });
        }

        if (product.quantity < cart.cartInfo[findCart].quantity) {
          return res.status(404).json({
            message: 'product in cart not equal',
          });
        }
        products.push({
          productId,
          quantity: cart.cartInfo[findCart].quantity,
          previewImage: product.previewImage
        })

        totalPrice += product.price * cart.cartInfo[findCart].quantity;

        product.quantity -= cart.cartInfo[findCart].quantity;

        cart.cartInfo.splice(findCart, 1);

        await product.save();
        await cart.save();
      }
      await Order.create({ userId, products, totalPrice })
      return res.json({ messenger: 'add success' })
    } catch (error) {
      next(error)
    }
  },
}