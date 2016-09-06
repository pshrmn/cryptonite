import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { InputRow, Errors } from './inputs';
import { login } from '../api/auth';
import { loginUser } from '../actions';

const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errors: {}
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
      .catch(errors => {
        this.setState({ errors })
      });
  },
  render: function() {
    const {
      username,
      password,
      errors = {}
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Errors errors={errors['__all__']} />
        <InputRow name='Username'
                value={username}
                handler={this.handleUsername}
                errors={errors.username}
                id='login-username-input' />
        <InputRow name='Password'
                value={password}
                type='password'
                handler={this.handlePassword}
                errors={errors.password}
                id='login-password-input' />
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
});

export default connect(
  null,
  {
    loginUser
  }
)(withRouter(LoginForm));
