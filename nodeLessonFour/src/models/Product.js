const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  images: {
    type: Array,
    default: []
  },
  createBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  }
});

module.exports = mongoose.model('products', productSchema);