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

  const links = [
    {
      key: 'learn',
      component: <Link to={{pathname: '/learn'}}>Learn</Link>
    }
  ];
  if ( user.authenticated ) {
    links.push({
      key: 'profile',
      component: <Link className='cap' to={{pathname: 'profile'}}>{ user.username }</Link>
    });
    links.push({
      key: 'logout',
      component: <LogoutLink logoutUser={logoutUser} />
    })
  } else {
    links.push({
      key: 'signup',
      component: <Link to={{pathname: '/signup'}}>Login</Link>
    });
    links.push({
      key: 'login',
      component: <Link to={{pathname: '/login'}}>Login</Link>
    });
  }

  return (
    <header>
      <IndexLink id='home' to={{pathname: '/'}}>Cryptonite</IndexLink>
      <nav>
        <ul>
          {
            links.map(l => <li key={l.key}>{l.component}</li>)
          }
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
