'use strict';

module.exports = function (app) {

  app.get('/', (req, res, next) => {
    console.log('Hello from Index');
    res.sendStatus(200);
  });
};
