var express = require('express');
var router = express.Router();

var eventsController = require('../controllers/events');
var usersCtrl = require('../controllers/users')

// Require token authentication.
var token = require('../config/token_auth');


router.route('/events')
  .get(eventsController.show)
  .post(eventsController.create);

router.route('/events/:id')
  .get(eventsController.show)
  .put(token.authenticate, eventsController.update)
  .delete(eventsController.destroy);

router.route('/users')
  .post(usersCtrl.create);

router.route('/users/me')
  .get(token.authenticate, usersCtrl.me);

router.route('/token')
  .post(token.create);

// GET home page
router.get('/', function(req, res, next) {
  res.redirect('index.html');
});

router.get('*', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
