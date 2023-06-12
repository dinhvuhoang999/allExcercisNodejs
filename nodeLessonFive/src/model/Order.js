const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  products: {
    type: Array,
    default: [],
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'products'
    }
  },
  totalPrice: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('orders', Order);
