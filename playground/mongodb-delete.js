const {MongoClient, ObjectID} = require('mongodb');
//Destructured version of the above with .mongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
      return console.log('An error occured during connect to MongoDB');
      //Add return to ensure the success message below doesn't run
    }
    console.log('Connected to MongoDB Server');

    //deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
//      console.log(result);
//    });

  //deletOne
//    db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
//      console.log(result);
//    });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({complete: false}).then((result)=>{
    console.log(result);
  });

    //db.close();
});
