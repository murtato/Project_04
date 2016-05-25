var User = require("../models/user");

module.exports = {
  create: create,
  me:     me
};

function create(req, res, next) {
  if(!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  console.log(req.body)
  User
  .create(req.body)
  .then(function(user){
    console.log(user)
    res.json({
      success: true,
      message: 'Successfully created user.',
      data: {
        email: user.email,
        id:    user._id
      }
    });
  }).catch(function(err) {
    console.log(err)
    if (err.message.match(/E11000/)) {
      err.status = 409;
    } else {
      err.status = 422;
    }
    next(err);
  });
};

function me(req, res, next) {
  console.log("LOOK HERE: ", req)
  User
    .findOne({_id: req.decoded._id}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err){
      next(err);
    });
};
