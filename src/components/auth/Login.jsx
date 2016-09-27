import React from 'react';
import { Link } from 'react-router';

import LoginForm from 'components/forms/LoginForm';

export default ({location}) => {
  let next = '/';
  if ( location.query && location.query.next ) {
    next = location.query.next;
  } else if ( location.state && location.state.from ) {
    next = location.state.from
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginForm next={next} />
      <p>
        Don't have an account? <Link to='/signup'>Sign up here</Link>
      </p>
    </div>
  );
}