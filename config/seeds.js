require('dotenv').load();
var mongoose = require('./database');

var Event = require('../models/event');

var events = [
  { title: "Iraqi refugees in San Diego",
    description: "Help refugees find employment in San Diego!",
    organization: "IRC El Cajon"
  },
  { title: "Syrian refugees in Wisconsin",
    description: "Syrian refugees need help with government paperwork in Green Bay",
    organization: ""
  },
   { title: "Teach kids English in LA!",
    description: "Tutor children of Iranian refugees in downtown Glendale!",
    organization: "IRC Los Angeles"
  },
]
