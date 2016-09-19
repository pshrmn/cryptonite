import React from 'react';
import { connect } from 'react-redux';
import { Match, Redirect } from 'react-router';

const MatchWhenAuthorized = ({component: Component, user, ...rest}) => (
  <Match {...rest} render={props => (
    user && user.authenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
    )
  )} />
);

/*
 * If a connected component is pure, it will only update when the store
 * or its props have updated. By making it not pure, shouldComponentUpdate
 * will return true, allowing the <Match /> component to react to new locations
 */
export default connect(
  state => ({
    user: state.user,
  }),
  null,
  null,
  {
    pure: false
  }
)(MatchWhenAuthorized);
