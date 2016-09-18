import React from 'react';
import { connect } from 'react-redux';
import { Match, Link } from 'react-router';

import ChangePassword from './ChangePassword';
import LogoutLink from './LogoutLink';

export default function Profile({ pathname }) {
  return (
    <div>
      <Match pattern={pathname} exactly component={BaseProfile} />
      <Match pattern={`${pathname}/change-password`} component={ChangePassword} />
    </div>
  );
}

function BaseProfile(props) {
  return (
    <ul>
      <li>
        <LogoutLink />
      </li>
      <li>
        <Link to={{pathname: 'profile/change-password'}}>Change Password</Link>
      </li>
    </ul>
  );
}
