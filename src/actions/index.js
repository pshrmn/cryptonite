import * as types from '../constants/ActionTypes';

export const loginUser = user => ({
  type: types.LOGIN_USER,
  user
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER
});

export const loadChallenge = challenge => ({
  type: types.LOAD_CHALLENGE,
  challenge
});

export const loadChallenges = challenges => ({
  type: types.LOAD_CHALLENGES,
  challenges
});
