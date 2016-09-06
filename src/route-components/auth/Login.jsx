import React from 'react';
import { Link } from 'react-router';

import LoginForm from '../../components/LoginForm';

export default function Login(props) {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <Link to={{pathname: '/signup'}}>Sign up here</Link>
      </p>
    </div>
  );
}
