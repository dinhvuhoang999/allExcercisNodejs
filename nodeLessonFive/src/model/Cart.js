const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  cartInfo: {
    type: Array,
    default: [],
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    quantity: {
      type: Number,
      default: 1,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  }
});

module.exports = mongoose.model('carts', Cart);
