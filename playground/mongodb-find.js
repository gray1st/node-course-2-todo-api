const {MongoClient, ObjectID} = require('mongodb');
//Destructured version of the above with .mongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
      return console.log('An error occured during connect to MongoDB');
      //Add return to ensure the success message below doesn't run
    }
    console.log('Connected to MongoDB Server');

//    db.collection('Todos').find().toArray().then((docs) =>{
//      console.log('Todos');
//      console.log(JSON.stringify(docs,undefined, 2));
//    },(err)=>{
//      console.log('Unable to fetch Todos', err);
//    });
    //Return Everything

//    db.collection('Todos').find({complete: false}).toArray().then((docs) =>{
//      console.log('Todos');
//      console.log(JSON.stringify(docs,undefined, 2));
//    },(err)=>{
//      console.log('Unable to fetch Todos', err);
//    });
  //Return everything with the find criteria

//   db.collection('Todos').find({
//     _id: new ObjectID('58765039cfb8230998c738c8')
//      }).toArray().then((docs) =>{
//      console.log('Todos');
//      console.log(JSON.stringify(docs,undefined, 2));
//    },(err)=>{
//      console.log('Unable to fetch Todos', err);
//    });
    //Return everything with a specific ObjectID

    db.collection('Todos').find().count().then((count) =>{
       console.log('Todos Count:' + count);
     },(err)=>{
       console.log('Unable to fetch Todos', err);
     });


    //db.close();
});
