const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', User);
