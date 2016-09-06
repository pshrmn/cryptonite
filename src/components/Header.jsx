import React from 'react';
import { Link } from 'react-router';

import { logout } from '../api/auth';

function Header(props, context) {
  const logoutHandler = event => {
    event.preventDefault();
    logout()
      .then(() => {
        context.router.push('/');
      })
  }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={{pathname: 'signup'}}>Sign Up</Link>
          </li>
          <li>
            <Link to={{pathname: 'login'}}>Login</Link>
          </li>
          <li>
            <a href='#' onClick={logoutHandler}>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object
};

export default  Header;
