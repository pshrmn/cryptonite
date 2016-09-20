import React from 'react';
import { Link } from 'react-router';

import SignupForm from '../forms/SignupForm';

export default ({location}) => {
  let next = '/';
  if ( location.query && location.query.next ) {
    next = location.query.next;
  } else if ( location.state && location.state.from ) {
    next = location.state.from
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm next={
        (location.state && location.state.from) ? location.state.from : '/'
      } />
      <p>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
  );
}