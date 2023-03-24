var express = require('express');
var router = express.Router();
const mongoConnection = require('../config/mongoCollection');
const datainfo = mongoConnection.Datainfo;
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://zz1999526:Zhouzhe526@cluster0.lwbk2we.mongodb.net/?retryWrites=true&w=majority'; 
// const dbName = 'Data'; 
// const client = new MongoClient(url,{ useUnifiedTopology: true }); 

function insert(name, quantity) {
  client.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("connected");
    //get db
    const db = client.db(dbName);
    db.collection("user").insertOne({ "name": name, "quantity": quantity }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      client.close();
    })
  });
}

router.get('/', async (req, res, next) => {
  res.status(200).json();
});


router.post('/', async (req, res, next) => {
  console.log(req.body);
  let a = req.body;

  const datainfoCollection = await datainfo();
  await datainfoCollection.insertOne({ "name": a.name, "quantity": a.quantity ,"image":a.image}, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('insert finished');
    res.status(200).json('new inventory done');
  });


});


module.exports = router;