import React from 'react';
import { Link } from 'curi-react';
import { parse } from 'qs'

import LoginForm from 'components/forms/LoginForm';

export default ({location}) => {
  let next = '/';
  let query = parse(location.search && location.search.substr(1))
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
