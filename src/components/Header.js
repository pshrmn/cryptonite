import React from 'react';
import { Link } from 'curi-react';
import { connect } from 'react-redux';

import LogoutLink from 'components/auth/LogoutLink';
import { star } from 'components/symbols';

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
        <Link className='cap' to='Profile'>
          { user.username }
        </Link>
        <ul>
          <li key='profile'>
            <Link to='Profile'>Profile</Link>
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
        <Link to='Signup'>Signup</Link>
      </li>
    );
    userLinks.push(
      <li key='login'>
        <Link to='Login'>Login</Link>
      </li>
    );
  }

  const links = [
    <li key='learn'>
      <Link to='Lessons'>Learn</Link>
    </li>,
    <li key='challenges'>
      <Link to='Challenges'>Challenges</Link>
    </li>,
    <li key='tools'>
      <Link to='Tools'>Tools</Link>
    </li>,
    ...userLinks
  ];


  return (
    <header>
      <div className='container'>
        <Link id='home' to='Home'>Cryptonite</Link>
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
