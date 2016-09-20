import React from 'react';
import { Link } from 'react-router';

import LoginForm from '../forms/LoginForm';

export default ({location}) => (
  <div>
    <h2>Login</h2>
    <LoginForm next={
      (location.state && location.state.from) ? location.state.from : '/'
    } />
    <p>
      Don't have an account? <Link to='/signup'>Sign up here</Link>
    </p>
  </div>
);
