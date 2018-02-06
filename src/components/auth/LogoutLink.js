import React from 'react';
import { compose, withApollo, graphql } from 'react-apollo';
import { LOGOUT_MUTATION } from 'api/mutations';
import { Curious } from '@curi/react';

const LogoutLink = (props) => {
  const logoutHandler = event => {
    event.preventDefault();
    props.mutate()
      .then((resp) => {
        const { success } = resp.data.logoutUser;
        if (success) {
          props.router.history.push('/');
          props.client.resetStore();
        }
      })
  }

  return <a href='#' onClick={logoutHandler}>Logout</a>;
}

const ComposedLink = compose(
  withApollo,
  graphql(LOGOUT_MUTATION)
)(LogoutLink);

export default props => (
  <Curious>
    {({ router }) => (
      <ComposedLink {...props} router={router} />
    )}
  </Curious>
);
