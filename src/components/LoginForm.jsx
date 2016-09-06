import React from 'react';

import { PInput } from './inputs';
import { login } from '../api/auth';

export default React.createClass({
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
      .then(resp => {
        resp.json()
          .then(body => {
            console.log(body);
          })
      })
      .catch(err => {
        console.error(err);
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
