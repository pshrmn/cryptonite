import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import ChangePassword from './ChangePassword';
import LogoutLink from './LogoutLink';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/change-password`} component={ChangePassword} />
    <Route exact path={match.url} component={BaseProfile} />
  </Switch>
)

const BaseProfile = ({ match }) => (
  <ul>
    <li>
      <LogoutLink />
    </li>
    <li>
      <Link to={`${match.url}/change-password`}>Change Password</Link>
    </li>
  </ul>
);
