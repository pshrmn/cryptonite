import React from 'react';
import { connect } from 'react-redux';
import { Match, Redirect } from 'react-router';

const MatchWhenAuthorized = props => {
  const {
    component: Component,
    user,
    ...rest
  } = props;
  return (
     <Match {...rest} render={props => {
      return (
      (user && user.authenticated) ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      ))}
    }/>
  );
}

export default connect(
  state => ({
    user: state.user
  })
)(MatchWhenAuthorized);