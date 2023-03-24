var express = require('express');
var router = express.Router();
let  { ObjectId } = require("mongodb");
const mongoConnection = require('../config/mongoCollection');
const data = mongoConnection.Datainfo;
const dbConfig = {
    url: "mongodb+srv://zz1999526:Zhouzhe526@cluster0.lwbk2we.mongodb.net/Lab2?retryWrites=true&w=majority",
    //mongodb+srv://zz1999526:Zhouzhe526@cluster0.lwbk2we.mongodb.net/test
    database: "Lab2",
    imgBucket: "photos",
};
router.post('/', async function (req, res, next) {
    const UserDataCollection = await data();
    let d = req.body;
    UserDataCollection.deleteOne({ "_id": new ObjectId('641bf84cce79e197f4ef285e') } , function (err, docs) {
        if (err) {
            return console.log(err)
        }
        console.log(docs)
    })

});

module.exports = router;