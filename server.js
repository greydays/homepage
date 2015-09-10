'use strict';

var express = require('express');
var mongoose = require('mongoose');
var www = express();

var bodyParser = require('body-parser');
www.use(bodyParser.json());
www.use(bodyParser.urlencoded({extended: false}));

www.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');
var feedbackRouter = express.Router();
require('./routes/feedback-router')(feedbackRouter);
www.use('/feedback', feedbackRouter);

var port = process.env.PORT || 3000;

www.listen(port, function() {
  console.log('Server started on port ' + port);
});
