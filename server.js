'use strict';

var express = require('express');
var www = express();

www.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

www.listen(port, function() {
  console.log('Server started on port ' + port);
});
