var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = mongoose.Schema({
  name: {type: String}
  created: {type: datetime, default: now}
});
