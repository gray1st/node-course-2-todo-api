const {MongoClient, ObjectID} = require('mongodb');
//Destructured version of the above with .mongoClient


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
      return console.log('An error occured during connect to MongoDB');
      //Add return to ensure the success message below doesn't run
    }
    console.log('Connected to MongoDB Server');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('587b52ada6bc87bb4d0849cf')
    },{
      $set:{
        text: 'Eat Lunch and Sleep'
      }
      },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

    //db.close();
});
