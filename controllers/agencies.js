var Agency = require("../models/agency");

module.exports = {
  create: create,
  me:     me
};

function create(req, res, next) {
  if(!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  Agency
  .create(req.body)
  .then(function(agency){
    res.json({
      success: true,
      message: 'Successfully created agency.',
      data: {
        email: agency.email,
        id:    agency._id
      }
    });
  }).catch(function(err) {
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
  Agency
    .findOne({_id: req.decoded._id}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved agency data.',
        data: agency
      });
    })
    .catch(function(err){
      next(err);
    });
};
