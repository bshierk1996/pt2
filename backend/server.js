express  = require("express");
firebase = require("firebase");
bodyparser = require('body-parser');

var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})  