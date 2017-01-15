var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove trailing and leading spaces
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});



//var newToDo = new Todo({
//  text: 'Cook Dinner'
//});

//newToDo.save().then((doc)=>{
//  console.log('saved Todo', doc);
//},(e)=>{
//    console.log('unable to save Todo')
//});
module.exports = {
  Todo
};
