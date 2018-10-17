const port = 3003 || process.env.PORT;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");

const server = express();

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, () => { console.log(`Servidor running on port : ${port} \n`); });

module.exports = server;