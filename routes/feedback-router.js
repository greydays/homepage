'use strict';

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var feedBack = require('../models/feedback')

module.exports = function(router) {
  router.use(bodyParser.json());



};
