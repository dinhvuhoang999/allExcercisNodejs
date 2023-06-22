const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },
  products: [{
    productId: { type: mongoose.Types.ObjectId, required: true, ref: 'products' },
    quantity: { type: Number, required: true },
    previewImage: { type: String, required: true },
  }],
  totalPrice: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('orders', orderSchema);
