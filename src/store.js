import { createStore, combineReducers } from 'redux';
import reducers from 'reducers';

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

export default store;
