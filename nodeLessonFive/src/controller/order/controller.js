const { Cart, User, Product, Order } = require('../../model');

module.exports = {
  payForOrder: async (req, res, next) => {
    try {
      const { productListId, UserId } = req.body;

      for (const item of productListId) {
        const product = await Product.findById(item.productId);
        if (!product) {
          return res.status(404).json({
            message: 'Product not found'
          });
        }
      }

      const cart = await Cart.findOne({});
      const dataListProduct = [];
      let price = 0;

      for (const item of cart.cartInfo) {
        for (let i = 0; i < productListId.length; i += 1) {
          const productSingle = await Product.findById(item.productId)
          if (productSingle.quantity < item.quantity) {
            return res.status(404).json({
              message: 'some product in cart is change'
            });
          }

          if (productListId[i].productId === item.productId) {
            dataListProduct.push({
              productListId: productSingle._id
            });
            price += productSingle.price
            break;
          }
        }
      }


      for (const item of cart.cartInfo) {

        const findProduct = cart.cartInfo.findIndex((cart) => {
          console.log(cart);
          console.log(item.productId);
          return item.productId === cart.productId
        })
        cart.cartInfo.splice(findProduct, 1); //delete cart when add order 
        console.log(findProduct);
      }

      await Order.create({
        userId: UserId,
        products: dataListProduct,
        totalPrice: price
      });

      await cart.save();

      return res.json({ messenger: "Add success order" })
    } catch (error) {
      next(error)
    }
  }
}