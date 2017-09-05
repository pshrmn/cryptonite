import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import { logoutUser } from 'actions';
import { logoutUser as logoutMutation } from 'api/mutations';

const LogoutLink = (props, context) => {
  const logoutHandler = event => {
    event.preventDefault();
    props.mutate()
      .then((resp) => {
        const { success } = resp.data.logoutUser;
        if (success) {
          props.logoutUser();
          context.curi.history.push('/');
        }
      })
  }

  return <a href='#' onClick={logoutHandler}>Logout</a>;
}

LogoutLink.contextTypes = {curi: React.PropTypes.object};

export default compose(
  graphql(logoutMutation),
  connect(
    state => ({ user: state.user }),
    { logoutUser }
  )
)(LogoutLink);
