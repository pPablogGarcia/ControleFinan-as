//const mongodb = require("mongodb").MongoClient;
const mongoose = require("mongoose");
console.log("database ==> ok");
//module.exports = mongodb.connect("mongodb://localhost:27017/db_finance",{ useNewUrlParser: true });
module.exports = mongoose.connect("mongodb://localhost:27017/db_finance", {useNewUrlParser: true});