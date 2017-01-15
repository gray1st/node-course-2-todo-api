const bodyParser = require('body-parser');
const express = require('express');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());


app.post('/todos', (req,res)=>{
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.status(200).send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});




app.listen(3000, () => {
  console.log('Server Started on Port 3000');
});
