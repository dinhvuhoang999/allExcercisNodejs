const { Cart, User, Product } = require('../../model');

module.exports = {
  getViewCart: async (req, res, next) => {
    try {
      const cartList = await Cart.find({}).lean();

      return res.json({ data: cartList })

    } catch (error) {
      next(error)
    }
  },
  addToCart: async (req, res, next) => {
    try {
      const { userId, productId, quantity } = req.body;
      const user = await User.findById(userId)


      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }

      let cart = await Cart.findOne({ userId });

      const findProduct = cart.cartInfo.findIndex((cart) => {
        return productId === cart.productId
      })

      if (findProduct === -1) {
        cart.cartInfo.push({
          productId,
          quantity
        })
        await cart.save();
      } else {
        await Cart.findOneAndUpdate({
          ...cart, cartInfo: {
            productId,
            quantity: cart.cartInfo[findProduct].quantity += quantity
          }
        });
      }

      return res.json({ data: cart })
    } catch (error) {
      next(error)
    }
  },
  deleteCart: async (req, res, next) => {
    try {
      const { productId } = req.params;
      console.log(productId);

      const product = await Product.findById(productId);

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
      } else {
        await Cart.findOneAndUpdate({
          ...cart, cartInfo: {
            productId,
            quantity: cart.cartInfo[findProduct].quantity -= 1
          }
        });

        if (cart.cartInfo[findProduct].quantity <= 0) {
          cart.cartInfo.splice(findProduct, 1);
        }
        await cart.save();
      }

      return res.json({ message: "delete success" })
    } catch (error) {
      next(error)
    }
  }
}