var Event = require('../models/event');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Event.find({}, function(err, events) {
    if(err) next(err);

    res.json(events);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Event.findById(id, function(err, event) {
    if (err) next (err);

    res.json(event);
  });
}

function create(req, res, next){
  var newEvent = new Event(req.body);
  console.log("hello posting", req.body)

  newEvent.save(function(err, savedEvent) {
    if (err) next (err);
    console.log(savedEvent);
    res.json(savedEvent);
  });

}

function update(req, res, next) {
  var id = req.params.id;

  Event.findById(id, function (err, event) {
    if (err) next (err);

    event.title = req.body.title;
    event.description = req.body.description;

    event.save (function(err, updatedEvent) {
      if(err) next(err);

      res.json(updatedEvent);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Event.remove({_id:id}, function(err) {
    if(err) next(err);

    res.json({message: 'Event successfully deleted'});
  });
}
