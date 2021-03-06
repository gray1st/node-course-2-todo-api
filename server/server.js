require('./config/config');

const bodyParser = require('body-parser');
const express = require('express');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

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
        return res.status(404).send();
      }
    res.status(200).send({todoById});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res)=>{
  if (!ObjectID.isValid(req.params.id)){
      return res.status(404).send();
  };
  Todo.findByIdAndRemove(req.params.id).then((doc)=>{
    if (!doc){
      return res.status(404).send();
    }
    res.status(200).send({doc});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id',(req,res)=>{
  //Using LoDash create an object with the following data if it exists
  var body = _.pick(req.body,['text', 'completed']);

  if (!ObjectID.isValid(req.params.id)){
      return res.status(404).send();
  };
  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(req.params.id, {$set: body}, {new: true}).then((todo) =>{
    if (!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) =>{
    return res.status(404).send();
  })
});

app.post('/users', (req, res)=>{
  var body = _.pick(req.body,['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
      return user.generateAuthToken();
      //res.status(200).send(doc);
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  });
});


app.listen(port, () => {
  console.log('Server Started on Port' + port);
});
