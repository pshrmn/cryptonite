import React from 'react';
import { Link } from 'react-router';

import SignupForm from '../../components/SignupForm';

export default function Signup(props) {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignupForm />
      <p>
        Already have an account? <Link to={{pathname: '/login'}}>Login here</Link>
      </p>
    </div>
  );
}
