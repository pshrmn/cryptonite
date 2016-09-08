import 'whatwg-fetch';

import { getCSRFToken } from '../helpers/csrf';

const URL_BASE = '/api/challenge';

export const path = pathID => {
    return fetch(`${URL_BASE}/path/${pathID}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    }
  });
};

export const challenge = challengeID => {
    return fetch(`${URL_BASE}/${challengeID}/`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    }
  });
};

export const check = (challengeID, message) => {
    return fetch(`${URL_BASE}/${challengeID}/check`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': getCSRFToken(),
    },
    body: JSON.stringify({
      message
    })
  });
};
