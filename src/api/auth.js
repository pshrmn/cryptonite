import 'whatwg-fetch';

import { getCSRFToken } from '../helpers/csrf';

const URL_BASE = '/api/auth';

export const login = (username, password) => {
  return fetch(`${URL_BASE}/login`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
    body: JSON.stringify({
      username,
      password
    })
  });
};

export const signup = (username, password1, password2) => {
  return fetch(`${URL_BASE}/signup`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
    body: JSON.stringify({
      username,
      password1,
      password2
    })
  });
};

export const logout = () => {
  return fetch(`${URL_BASE}/logout`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
  });
};

export const changePassword = (oldPassword, password1, password2) => {
  return fetch(`${URL_BASE}/change_password`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
    body: JSON.stringify({
      'old_password': oldPassword,
      'new_password1': password1,
      'new_password2': password2
    })
  });
};
