import React from 'react';
import { connect } from 'react-redux';

import { InputRow, Errors } from 'components/inputs';
import { login } from 'api/auth';
import { loginUser } from 'actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    login(this.state.username, this.state.password)
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
  }

  render() {
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
}

LoginForm.contextTypes = {
  router: React.PropTypes.object
};

export default connect(
  null,
  {
    loginUser
  }
)(LoginForm);
