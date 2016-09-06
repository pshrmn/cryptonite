import React from 'react';

import { PInput } from './inputs';
import { signup } from '../api/auth';

export default React.createClass({
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
      .then(resp => {
        console.log(resp);
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
          <button>Login</button>
        </div>
      </form>
    );
  }
});
