import React from 'react';
import { Link } from 'react-router';

import LoginForm from '../forms/LoginForm';

export default function Login(props) {
  const {location } = props;
  let next = '/';
  if ( location.state && location.state.from ) {
    next = location.state.from;
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
