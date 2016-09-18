import React from 'react';
import { Link } from 'react-router';

import SignupForm from '../forms/SignupForm';

export default function Signup(props) {
  let next = '/';
  if ( props.location.state && props.location.state.from ) {
    next = props.location.state.from;
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm next={next} />
      <p>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
  );
}
