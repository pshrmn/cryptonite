import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import reducers from 'reducers';
import Base from 'components/Base';

// the defaultState is used in case __INITIAL_STATE__
// does not exist
const defaultState = {
  user: {
    authenticated: false
  },
  challenges: []
};

const intialState = Object.assign({},
  defaultState,
  window.__INITIAL_STATE__
);

const reducer = combineReducers(reducers);
const store = createStore(reducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.querySelector('#app-holder')
);
