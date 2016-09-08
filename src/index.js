import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import routeMaker from './routes';
import reducers from './reducers';

const intialState = {
  user: window.__INITIAL_STATE__.user,
  challenges: {}
};
const reducer = combineReducers(reducers);
const store = createStore(reducer, intialState);

const requireAuth = (nextState, replace) => {
  const { user } = store.getState();
  if ( !user.authenticated ) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

// this function is used to prevent a logged in user
// from visiting the login/signup pages
const requireUnauth = (nextState, replace) => {
  const { user } = store.getState();
  if ( user.authenticated ) {
    replace({
      pathname: '/'
    })
  } 
}

const routes = routeMaker(requireAuth, requireUnauth);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.querySelector('#app-holder')
);
