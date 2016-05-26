var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  title: String,
  description: String,
  organization: String,
  address: String,
  city: String,
  state: String,
  zip: String
})

var Event = mongoose.model('Event', eventSchema)

module.exports = Event;
