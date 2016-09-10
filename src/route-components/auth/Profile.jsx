import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

function Profile(props) {
  const {
    user
  } = props;
  return (
    <div>
      <ul>
        <li>
          <LogoutLink />
        </li>
        <li>
          <Link to={{pathname: 'profile/change-password'}}>Change Password</Link>
        </li>
      </ul>
    </div>
  );
}

const LogoutLink = withRouter(function(props) {
  const logoutHandler = event => {
    event.preventDefault();
    logout()
      .then(() => {
        props.logoutUser();
        props.router.push('/');
      })
  }
  return <a href='#' onClick={logoutHandler}>Logout</a>;
});

export default connect(
  state => ({
    user: state.user
  }),
)(Profile);
