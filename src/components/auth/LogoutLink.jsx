import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from 'actions';
import { logout } from 'api/auth';

const LogoutLink = (props, context) => {
  const logoutHandler = event => {
    event.preventDefault();
    logout()
      .then(() => {
        props.logoutUser();
        context.router.transitionTo('/');
      })
  }
  return <a href='#' onClick={logoutHandler}>Logout</a>;
}

LogoutLink.contextTypes = {router: React.PropTypes.object};

export default connect(
  state => ({
    user: state.user
  }),
  {
    logoutUser
  }
)(LogoutLink);
