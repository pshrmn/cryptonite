import * as types from '../constants/ActionTypes';

export default function(state = {}, action) {
  switch(action.type) {
  case types.SET_ERRORS:
    return action.errors;
  case types.LOGOUT_USER:
  case types.LOGIN_USER:
    return {}
  default:
    return state;
  }
}
