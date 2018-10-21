const port = 3003 || process.env.PORT;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const queryParser = require("express-query-int");

const server = express();
const allowsCors = require("./cors.js")

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(allowsCors);
server.use(queryParser());

server.listen(port, () => { console.log(`Servidor running on port : ${port} \n`); });

module.exports = server;