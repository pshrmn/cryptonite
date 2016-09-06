import * as types from '../constants/ActionTypes';

export const loginUser = user => ({
  type: types.LOGIN_USER,
  user
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER
});

export const setErrors = errors => ({
  type: types.SET_ERRORS,
  errors
});
