import * as types from '../constants/ActionTypes';

export default function(state = {}, action) {
  switch(action.type) {
  case types.LOAD_CHALLENGE:
    var challenge = action.challenge;
    return Object.assign({}, state, {
      [challenge.pk]: challenge
    })
  case types.LOAD_CHALLENGES:
    const newChallenges = action.challenges.reduce((acc, curr) => {
      acc[curr.pk] = curr;
      return acc;
    }, {});
    return Object.assign({}, state, newChallenges);
  default:
    return state;
  }
}
