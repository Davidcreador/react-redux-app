'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import routes from './routes';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);