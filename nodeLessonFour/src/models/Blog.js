const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// enum: Là trường dữ liệu bắt buộc điều kiện
// ví dụ: enum=['pending', 'approved'] -> thì bắt buộc status phải bằng pending hoặc approved

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('blogs', blogSchema);