import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { PInput } from './inputs';
import { signup } from '../api/auth';
import { loginUser, setErrors } from '../actions';

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password1: '',
      password2: ''
    }
  },
  handleUsername: function(event) {
    this.setState({
      username: event.target.value
    });
  },
  handlePassword1: function(event) {
    this.setState({
      password1: event.target.value
    });
  },
  handlePassword2: function(event) {
    this.setState({
      password2: event.target.value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    signup(this.state.username, this.state.password1, this.state.password2)
      .then(resp => resp.json())
      .then(resp => {
        if ( resp.success ) {
          this.props.loginUser(resp.user);
          this.props.router.push('/');
        } else {
          return Promise.reject(resp.errors)
        }
      })
      .catch(errs => {
        this.props.setErrors(errs);
      });
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PInput name='Username'
                value={this.state.username}
                handler={this.handleUsername}
                id='signup-username-input' />
        <PInput name='Password'
                value={this.state.password1}
                type='password'
                handler={this.handlePassword1}
                id='signup-password1-input' />
        <PInput name='Password (Verify)'
                value={this.state.password2}
                type='password'
                handler={this.handlePassword2}
                id='signup-password2-input' />
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    );
  }
});

export default connect(
  state => ({
    errors: state.errors
  }),
  {
    loginUser,
    setErrors
  }
)(withRouter(SignupForm));

