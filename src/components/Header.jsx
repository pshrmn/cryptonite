import React from 'react';
import { IndexLink, Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import { logout } from '../api/auth';
import { logoutUser } from '../actions';

function Header(props) {
  const {
    user,
    logoutUser
  } = props;
  return (
    <header>
      <IndexLink to={{pathname: '/'}}>Cryptonite</IndexLink>
      <nav>
        { user.authenticated ?
          <LoggedIn user={user} logoutUser={logoutUser} />
          : <LoggedOut />
        }
      </nav>
    </header>
  );
}

const LoggedIn = withRouter(function(props) {
  const logoutHandler = event => {
    event.preventDefault();
    logout()
      .then(() => {
        props.logoutUser();
        props.router.push('/');
      })
  }

  return (
    <ul>
      <li>
        { props.user.username }
      </li>
      <li>
        <a href='#' onClick={logoutHandler}>Logout</a>
      </li>
    </ul>
  );
});

function LoggedOut(props) {
  return (
    <ul>
      <li>
        <Link to={{pathname: 'signup'}}>Sign Up</Link>
      </li>
      <li>
        <Link to={{pathname: 'login'}}>Login</Link>
      </li>
    </ul>
  );
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    logoutUser
  }
)(Header);
