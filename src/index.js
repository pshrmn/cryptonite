import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import reducers from './reducers';
import Base from './components/Base';

const intialState = {
  user: window.__INITIAL_STATE__.user,
  challenges: window.__INITIAL_STATE__.challenges
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.querySelector('#app-holder')
);
