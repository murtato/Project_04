var mongoose = require('mongoose'),
    debug    = require('debug')('app:models')

var agencySchema = mongoose.Schema({
  name: {type: String, required: true, unique: true },
  role: String, default: volunteer
  role: String, default: agent,
  email: {type: String, required: true, unique: true },
  type: { type: String, required: true },
  password: { type: String, required: true, bcrypt: true }
  address: String
});

// add bcrypt hashing to model (works on a password field)!
agencySchema.plugin(require('mongoose-bcrypt'))

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
agencySchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var Agency = mongoose.model('Agency', agencySchema)

module.exports = Agency;
