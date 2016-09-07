import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function Profile(props) {
  const {
    user
  } = props;
  return (
    <div>
      <Link to={{pathname: 'profile/change-password'}}>Change Password</Link>
    </div>
  );
}

export default connect(
  state => ({
    user: state.user
  }),
)(Profile);
