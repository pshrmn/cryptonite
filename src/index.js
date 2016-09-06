import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import routes from './routes';
import reducers from './reducers';

const intialState = {
  user: window.__INITIAL_STATE__.user,
  errors: {}
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.querySelector('main')
);
