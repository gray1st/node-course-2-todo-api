var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp2');

var Todo = mongoose.model('Todo',{
  text:{
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});
