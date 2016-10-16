import React from 'react';
import { connect } from 'react-redux';

import { InputRow, Errors } from 'components/inputs';
import Spinner from 'components/Spinner';
import { signup } from 'api/auth';
import { loginUser } from 'actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      loading: false
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword1 = this.handlePassword1.bind(this);
    this.handlePassword2 = this.handlePassword2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword1(event) {
    this.setState({
      password1: event.target.value
    });
  }

  handlePassword2(event) {
    this.setState({
      password2: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    signup(this.state.username, this.state.password1, this.state.password2)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ loading: false });
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
      password1,
      password2,
      errors = {},
      loading
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
          { loading ? <Spinner /> : null }
        </div>
      </form>
    );
  }
}

SignupForm.contextTypes = {
  router: React.PropTypes.object
};

export default connect(
  null,
  {
    loginUser
  }
)(SignupForm);

