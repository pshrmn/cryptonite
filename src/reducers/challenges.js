import * as types from '../constants/ActionTypes';

export default function(state = {}, action) {
  switch(action.type) {
  case types.LOAD_CHALLENGE:
    var challenge = action.challenge;
    return Object.assign({}, state, {
      [challenge.pk]: challenge
    })
  default:
    return state;
  }
}
