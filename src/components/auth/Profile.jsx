import React from 'react';
import { connect } from 'react-redux';
import { Match, Link } from 'react-router';

import ChangePassword from './ChangePassword';
import LogoutLink from './LogoutLink';

export default ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}/change-password`} component={ChangePassword} />
    <Match pattern={pathname} exactly component={BaseProfile} />
  </div>
);

function BaseProfile(props) {
  return (
    <ul>
      <li>
        <LogoutLink />
      </li>
      <li>
        <Link to='profile/change-password'>Change Password</Link>
      </li>
    </ul>
  );
}
