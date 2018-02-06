import React from 'react';
import { Link } from '@curi/react';

import LoginForm from 'components/forms/LoginForm';

export default ({ response }) => {
  let next = '/';
  const { location } = response;
  const { query } = location;
  if ( query && query.next ) {
    next = query.next;
  } else if ( location.state && location.state.from ) {
    next = location.state.from
  }

  return (
    <div>
      <h2>Login</h2>
      {
        next === '/'
          ? null
          : <p>
              The page you attempted to visit is protected. Please login to
              view it.
            </p>
      }
      <LoginForm next={next} />
      <p>
        Don't have an account? <Link to='Signup'>Sign up here</Link>
      </p>
    </div>
  );
}
