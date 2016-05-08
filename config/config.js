'use strict';

var pkg = require('../package.json');

module.exports = {
  database: process.env.MONGO_URI || 'mongodb://localhost/' + pkg.name,
};
