'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}>
      <Route path='/' component={App}></Route>
    </Router>
  </Provider>, document.getElementById('app'));
