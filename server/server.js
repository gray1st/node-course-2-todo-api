const bodyParser = require('body-parser');
const express = require('express');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


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

app.get('/todos', (req,res)=>{
  Todo.find().then((todos) =>{
    res.status(200).send({
      todos
    });
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res)=>{
  if (!ObjectID.isValid(req.params.id)){
      return res.status(404).send();
  };
    Todo.findById(req.params.id).then((todoById) =>{
      if  (!todoById){
        return res.status(404).send()
      }
    res.status(200).send({todoById});
  }).catch((e)=>{
    res.status(400).send();
  });
});



app.listen(port, () => {
  console.log('Server Started on Port' + port);
});
