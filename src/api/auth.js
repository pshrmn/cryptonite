import 'whatwg-fetch';

import { getCSRFToken } from '../helpers/csrf';

export const login = (username, password) => {
  const csrf = getCSRFToken();
  console.log(csrf);
  return fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': csrf,
    },
    body: JSON.stringify({
      username,
      password
    })
  });
};

export const signup = (username, password1, password2) => {
  return fetch('/api/auth/signup', {
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
  return fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
  });
};
