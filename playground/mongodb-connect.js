//const MongoClient = require('mongodb').MongoClient;
//Connect using standard MongoDB Client

const {MongoClient, ObjectID} = require('mongodb');
//Destructured version of the above with .mongoClient

//var obj = new ObjectID();
//console.log(obj);
// How to Create your own ObjectIDs (although no real need to do so)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
      return console.log('An error occured during connect to MongoDB');
      //Add return to ensure the success message below doesn't run
    }
    console.log('Connected to MongoDB Server');

//    db.collection('Todos').insertOne({
//      text: 'Something to do',
//      complete: false
//    },(err, result) =>{
//      if (err){
//        return console.log('Unable to insert todo',err);
//      }
//      console.log(JSON.stringify(result.ops, undefined, 2));
//    });
//db.collection('Users').insertOne({
//  name: 'Graham Smith',
//  userName: 'gsmith',
//  active: false
//},(err, result) =>{
//  if (err){
//    return console.log('Unable to insert User',err);
//  }
//  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //Show TimeStamp from ObjectID
//});



    db.close();
});
