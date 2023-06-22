const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  cartInfo: [{
    productId: {
      type: mongoose.Types.ObjectId, ref: 'products',
      required: true
    },
    quantity: { type: Number, required: true, min: 1 }
  }],
});

module.exports = mongoose.model('carts', Cart);