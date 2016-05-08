'use strict';

var mongoose = require('mongoose');

var subscriberSchema = new mongoose.Schema({
  name: { type: String, lowercase: true },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
