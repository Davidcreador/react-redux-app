'use strict';

import Router, { match } from 'react-router';
import React from 'react';
import Redux, { createStore } from 'redux';
import Provider from 'react-redux';
import swig from 'swig';
const ReactDOMServer = require('react-dom/server');
const myApp = require('../app/reducers').default;

// Importing Front-routes & Models
const routes = require('../app/routes');

module.exports = function (app) {

  app.get('/', (req, res, next) => {
    console.log('Hello from Index');
    next();
  });

  // Config Front-Router
  app.use((req, res) => {
    match({ routes: routes.default, location: req.url },
      (err, redirectLocation, renderProps) => {
        if (err) {
          res.status(500).send(err.message);
        } else if (redirectLocation) {
          res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          var store = createStore(myApp);
          var initialState = store.getState();

          var html = React.createElement(
            Provider,
            { store: store, key: 'provider' },
            React.createElement(renderProps)
          );

          var page = swig.renderFile('views/index.html', { html: html });
          res.status(200).send(page);

        } else {
          res.status(404).send('Page Not Found');
        }
      });
  });
};
