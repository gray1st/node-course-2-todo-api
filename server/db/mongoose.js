var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp2');
module.exports = {
  mongoose
};
