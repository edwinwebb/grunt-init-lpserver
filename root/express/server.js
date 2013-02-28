'use strict';

var express = require('express');
var handler = require('../conf/handler.js');
var littleprinter = require('littleprinter');

var app = express();
var port = process.env.PORT || 5000;

//set a view engine
app.set('view engine', 'ejs');

// start serving static files
app.use(express.static(__dirname+'/../static'));

//Override functions to pass data to paths
app.use('/edition', function(req, res, next) {
  //set some data to be passed to the view
  req.query.test = 'this variable was defined in server.js';

  //run the handler in littleprinter
  next(); 
});

//start little printer express server
littleprinter.setup(app, handler);

//start listening
app.listen(port);