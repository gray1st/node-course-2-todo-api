const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//var id = '587b6bcf33b6b83d8896990111';

if(!ObjectID.isValid(id)){
  console.log('ID is invalid');
};

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('findOne todos', todo);
});


  // Todo.findById(id).then((todo)=>{
  //   if(!todo){
  //     return console.log('ID not found');
  //   }
  //   console.log('findById', todo);
  // }).catch((e)=>
  // console.log(e));
