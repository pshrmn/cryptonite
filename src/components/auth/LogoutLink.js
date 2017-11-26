import React from 'react';
import PropTypes from 'prop-types';
import { compose, withApollo, graphql } from 'react-apollo';
import { LOGOUT_MUTATION } from 'api/mutations';

const LogoutLink = (props, context) => {
  const logoutHandler = event => {
    event.preventDefault();
    props.mutate()
      .then((resp) => {
        const { success } = resp.data.logoutUser;
        if (success) {
          context.curi.config.history.push('/');
          props.client.resetStore();
        }
      })
  }

  return <a href='#' onClick={logoutHandler}>Logout</a>;
}

LogoutLink.contextTypes = {
  curi: PropTypes.shape({
    config: PropTypes.object
  })
};

export default compose(
  withApollo,
  graphql(LOGOUT_MUTATION)
)(LogoutLink);
