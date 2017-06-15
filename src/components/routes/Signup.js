import React from 'react';
import { Link } from 'curi-react';

import SignupForm from 'components/forms/SignupForm';

export default ({ query, location }) => {
  let next = '/';
  if ( query && query.next ) {
    next = query.next;
  } else if ( location.state && location.state.from ) {
    next = location.state.from
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm next={next} />
      {
        next === '/'
          ? null
          : <p>
              The page you attempted to visit is protected. Please sign up to
              view it.
            </p>
      }
      <p>
        Already have an account? <Link to='Login'>Login here</Link>
      </p>
    </div>
  );
}