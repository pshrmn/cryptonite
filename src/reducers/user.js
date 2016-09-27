import * as types from 'constants/ActionTypes';

export default function(state = {}, action) {
  switch(action.type) {
  case types.LOGIN_USER:
    return Object.assign({}, action.user, {
      authenticated: true
    });

  case types.LOGOUT_USER:
    return {
      authenticated: false
    };

  case types.COMPLETE_CHALLENGE:
    return Object.assign({}, state, {
      points: action.points
    });

  default:
    return state;
  }
}
