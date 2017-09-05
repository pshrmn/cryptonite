import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from 'reducers';
import client from 'apolloClient';

// the defaultState is used in case __INITIAL_STATE__
// does not exist
const defaultState = {
  user: {
    authenticated: false
  },
  challenges: []
};

const initialState = Object.assign({},
  defaultState,
  window.__INITIAL_STATE__
);

const reducer = combineReducers({
  ...reducers,
  apollo: client.reducer()
});

const middleware = applyMiddleware(client.middleware());

const store = createStore(reducer, initialState, middleware);

export default store;
