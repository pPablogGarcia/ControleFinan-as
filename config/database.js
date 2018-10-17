//const mongodb = require("mongodb").MongoClient;
const mongoose = require("mongoose");
console.log("database ==> ok");
//module.exports = mongodb.connect("mongodb://localhost:27017/db_finance",{ useNewUrlParser: true });
module.exports = mongoose.connect("mongodb://localhost:27017/db_finance", {useNewUrlParser: true});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
//mongoose.Error.mensages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."