const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('users', userSchema);
