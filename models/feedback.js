var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  name: String,
  date: Date,
  twitter: String,
  feedbackText: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
