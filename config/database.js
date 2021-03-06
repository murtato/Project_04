var mongoose = require('mongoose');

// Use different database URIs based on whether an env var exists.
require('dotenv').load()
var dbUri = process.env.MONGOLAB_URI ||
            'mongodb://localhost/' + process.env.LOCAL_DB;

if (!process.env.MONGOLAB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

console.log("Connecting to Mongo: " + dbUri)
mongoose.connect(dbUri);

module.exports = mongoose;
