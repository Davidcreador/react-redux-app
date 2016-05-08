'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import IndexHome from './components/IndexHome';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={IndexHome} />
  </Route>
);
