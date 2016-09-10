import React from 'react';
import { IndexLink, Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import { logout } from '../api/auth';
import { logoutUser } from '../actions';

import '../scss/header.scss';

function Header(props) {
  const {
    user,
    logoutUser
  } = props;

  const userLinks = [];

  if ( user.authenticated ) {
    userLinks.push(
      <li key='user'>
        <Link className='cap' to={{pathname: 'profile'}}>{ user.username }</Link>
        <ul>
          <li key='profile'>
            <Link to={{pathname: 'profile'}}>Profile</Link>
          </li>
          <li key='logout'>
            <LogoutLink logoutUser={logoutUser} />
          </li>
        </ul>
      </li>
    );
  } else {
    userLinks.push(
      <li key='signup'>
        <Link to={{pathname: '/signup'}}>Signup</Link>
      </li>
    );
    userLinks.push(
      <li key='login'>
        <Link to={{pathname: '/login'}}>Login</Link>
      </li>
    );
  }
  const links = [
    <li key='learn'>
      <Link to={{pathname: '/learn'}}>Learn</Link>
    </li>,
    <li key='challenges'>
      <Link to={{pathname: '/challenges'}}>Challenges</Link>
    </li>,
    <li key='tools'>
      <Link to={{pathname: '/tools'}}>Tools</Link>
    </li>,
    ...userLinks
  ];


  return (
    <header>
      <IndexLink id='home' to={{pathname: '/'}}>Cryptonite</IndexLink>
      <nav>
        <ul>
          { links }
        </ul>
      </nav>
    </header>
  );
}

const LogoutLink = withRouter(function(props) {
  const logoutHandler = event => {
    event.preventDefault();
    logout()
      .then(() => {
        props.logoutUser();
        props.router.push('/');
      })
  }
  return <a href='#' onClick={logoutHandler}>Logout</a>;
});

export default connect(
  state => ({
    user: state.user
  }),
  {
    logoutUser
  }
)(Header);
