import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { InputRow, Errors } from './inputs';
import { signup } from '../api/auth';
import { loginUser } from '../actions';

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
      .catch(errors => {
        this.setState({ errors })
      });
  },
  render: function() {
    const {
      username,
      password1,
      password2,
      errors = {}
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Errors errors={errors['__all__']} />
        <InputRow name='Username'
                value={username}
                handler={this.handleUsername}
                errors={errors.username}
                id='signup-username-input' />
        <InputRow name='Password'
                value={password1}
                type='password'
                handler={this.handlePassword1}
                errors={errors.password1}
                id='signup-password1-input' />
        <InputRow name='Password (Verify)'
                value={password2}
                type='password'
                handler={this.handlePassword2}
                errors={errors.password2}
                id='signup-password2-input' />
        <div>
          <button>Sign Up</button>
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
)(withRouter(SignupForm));

