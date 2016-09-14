import React from 'react';
import { Link } from 'react-router';

import LoginForm from '../../components/LoginForm';

export default function Login(props) {
  let next = '/';
  if ( props.location.state && props.location.state.from ) {
    next = props.location.state.from;
  }
  return (
    <div>
      <h2>Login</h2>
      <LoginForm next={next} />
      <p>
        Don't have an account? <Link to={{pathname: '/signup'}}>Sign up here</Link>
      </p>
    </div>
  );
}
