import React from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
import { LOGOUT_MUTATION } from 'api/mutations';

const LogoutLink = (props, context) => {
  const logoutHandler = event => {
    event.preventDefault();
    props.mutate()
      .then((resp) => {
        const { success } = resp.data.logoutUser;
        if (success) {
          props.client.resetStore();
          context.curi.history.push('/');
        }
      })
  }

  return <a href='#' onClick={logoutHandler}>Logout</a>;
}

LogoutLink.contextTypes = {curi: React.PropTypes.object};

export default compose(
  withApollo,
  graphql(LOGOUT_MUTATION)
)(LogoutLink);
