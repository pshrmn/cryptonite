import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { PInput } from './inputs';
import { login } from '../api/auth';
import { loginUser, setErrors } from '../actions';

const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  handleUsername: function(event) {
    this.setState({
      username: event.target.value
    });
  },
  handlePassword: function(event) {
    this.setState({
      password: event.target.value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    login(this.state.username, this.state.password)
      .then(resp => resp.json())
      .then(resp => {
        if ( resp.success ) {
          this.props.loginUser(resp.user);
          this.props.router.push('/');
        } else {
          return Promise.reject(resp.errors);
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
                id='login-username-input' />
        <PInput name='Password'
                value={this.state.password}
                type='password'
                handler={this.handlePassword}
                id='login-password-input' />
        <div>
          <button>Login</button>
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
)(withRouter(LoginForm));
