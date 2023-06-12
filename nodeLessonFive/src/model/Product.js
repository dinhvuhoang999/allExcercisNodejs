const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = mongoose.model('products', Product);
