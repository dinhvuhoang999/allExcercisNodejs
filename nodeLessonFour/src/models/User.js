const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// required -> yêu cầu trường dữ liệu phải bắt buộc khi tạo dữ liệu mới
// default -> là khi trường dữ liêu không tồn tại, dữ liệu trong database sẽ lấy default làm dữ liệu mặc định
// ví dụ: username mặc định là 'user_default' -> mà lúc tạo dữ liệu username=null thì dữ liệu đó sẽ lấy default làm dữ liệu mặc định

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    // default: 'user_default'
  },
  password: {
    type: String
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('users', userSchema);