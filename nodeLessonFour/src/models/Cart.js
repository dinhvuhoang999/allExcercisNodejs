const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'users'
  },
  cartInfo: {
    type: Array,
    default: [],
    productId: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'products'
    },
    quantity: {
      type: Number,
      min: 1,
      default: 1
    }
  }
});

module.exports = mongoose.model('carts', cartSchema);
