import React from 'react';
import { Link } from 'react-router';

import SignupForm from '../../components/SignupForm';

export default function Signup(props) {
  let next = '/';
  if ( props.location.state && props.location.state.nextPathname ) {
    next = props.location.state.nextPathname;
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm next={next} />
      <p>
        Already have an account? <Link to={{pathname: '/login'}}>Login here</Link>
      </p>
    </div>
  );
}
