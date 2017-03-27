import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LogoutLink from './auth/LogoutLink';
import { star } from './symbols';

import 'scss/header.scss';

function Header(props) {
  const {
    user,
    location
  } = props;
  const userLinks = [];
  
  if ( user.authenticated ) {
    userLinks.push(
      <li key='user'>
        <Link className='cap' to='/profile'>
          { user.username }
        </Link>
        <ul>
          <li key='profile'>
            <Link to='/profile'>Profile</Link>
          </li>
          <li key='logout'>
            <LogoutLink />
          </li>
        </ul>
        <span className='user-points' title={`You have ${user.points} points!`}>
          {user.points}{star}
        </span>
      </li>
    );
  } else {
    userLinks.push(
      <li key='signup'>
        <Link to='/signup'>Signup</Link>
      </li>
    );
    userLinks.push(
      <li key='login'>
        <Link to='/login'>Login</Link>
      </li>
    );
  }

  const links = [
    <li key='learn'>
      <Link to='/learn'>Learn</Link>
    </li>,
    <li key='challenges'>
      <Link to='/challenges/'>Challenges</Link>
    </li>,
    <li key='tools'>
      <Link to='/tools'>Tools</Link>
    </li>,
    ...userLinks
  ];


  return (
    <header>
      <div className='container'>
        <Link id='home' to='/'>Cryptonite</Link>
        <nav>
          <ul>
            { links }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default connect(
  state => ({
    user: state.user
  })
)(Header);
