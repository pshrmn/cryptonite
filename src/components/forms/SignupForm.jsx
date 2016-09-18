import React from 'react';
import { connect } from 'react-redux';

import { InputRow, Errors } from '../inputs';
import { signup } from '../../api/auth';
import { loginUser } from '../../actions';

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password1: '',
      password2: ''
    }
  },
  contextTypes: {
    router: React.PropTypes.object
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
          this.context.router.transitionTo(this.props.next || '/');
        } else {
          this.setState({errors: resp.errors});
        }
      })
      .catch(err => {
        console.error(err);
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
)(SignupForm);

