const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.findOneAndRemove({_id: '587b5d8a04864a23eca08fec'
//
//     }).then((doc)=>{
//
// });

Todo.findByIdAndRemove('587b5d8a04864a23eca08fec').then((doc)=>{
  console.log(doc);
});
