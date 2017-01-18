const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'secret123');
console.log(token);

var verify = jwt.verify(token, 'secret123');
console.log(verify);



// var message = 'User 123';
// var hash = SHA256(message).toString();
// console.log('Message:' + message);
// console.log('Hash:' + hash);
//
// var data ={
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) +'secret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
//
// if (resultHash === token.hash){
//   console.log('Data Is Correct');
// }else{
//   console.log('Data is Incorrect');
// };
