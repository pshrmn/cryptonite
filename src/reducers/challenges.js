import * as types from 'constants/ActionTypes';

export default function(state = [], action) {
  switch(action.type) {
  case types.LOGOUT_USER:
    // clear the challenges when the user logs out
    return [];

  case types.COMPLETE_CHALLENGE:
    // for the time being, this replicates the LOAD_CHALLENGE
    // functionality, so just fall through to it
  case types.LOAD_CHALLENGE:
    // filter out the challenge from existing state if it exists
    // this allows the challenge to be updated if it is already
    // known, such as when a user successfully completes it
    var challenge = action.challenge;

    return [
      ...state.filter(c => c.pk !== challenge.pk),
      challenge
    ].sort((a,b) => a.pk - b.pk);

  case types.LOAD_CHALLENGES:
    // create an object using the kew for each challenge
    var known_challenges = state.reduce((acc, curr) => {
      acc[curr.pk] = curr;
      return acc;
    }, {});
    // insert the new challenges into the object. This will
    // override existing challenges
    action.challenges.forEach(c => {
      known_challenges[c.pk] = c;
    });

    return Object.keys(known_challenges)
      .map(key => known_challenges[key])
      .sort((a,b) => a.pk - b.pk);

  default:
    return state;
  }
}
