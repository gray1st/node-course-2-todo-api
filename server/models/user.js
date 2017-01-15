var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type: String,
    minlength: 1,
    required: true,
    trim:true
  }
});
//var newUser = new User({
//  email: 'gray1st@hotmail.com'
//});

//newUser.save().then((doc)=>{
//  console.log(JSON.stringify(doc,undefined,2));
//},(e)=>{
//  console.log('unable to save user', e);
//});

module.exports = {
  User
};
