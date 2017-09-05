import React from 'react';
import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import { InputRow, Errors } from 'components/inputs';
import Spinner from 'components/Spinner';
import { signupUser as signupMutation } from 'api/mutations';
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    this.props.mutate({
      variables: {
        username: this.state.username,
        password1: this.state.password1,
        password2: this.state.password2
      }
    })
      .then(resp => {
        this.setState({ loading: false });
        const { success, errors, user } = resp.data.signupUser;
        if ( success ) {
          this.props.loginUser(user);
          this.context.curi.history.push(this.props.next || '/');
        } else {
          const errorsObject = errors.reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
          }, {})
          this.setState({errors: errorsObject});
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
        <InputRow
          name='Username'
          value={username}
          handler={this.handleChange}
          errors={errors.username}
          id='signup-username-input'
          inputName='username'
        />
        <InputRow
          name='Password'
          value={password1}
          type='password'
          handler={this.handleChange}
          errors={errors.password1}
          id='signup-password1-input'
          inputName='password1'
        />
        <InputRow
          name='Password (Verify)'
          value={password2}
          type='password'
          handler={this.handleChange}
          errors={errors.password2}
          id='signup-password2-input'
          inputName='password2'
        />
        <div>
          <button>Sign Up</button>
          { loading ? <Spinner /> : null }
        </div>
      </form>
    );
  }
}

SignupForm.contextTypes = {
  curi: React.PropTypes.object
};

export default compose(
  graphql(signupMutation),
  connect(null, { loginUser })
)(SignupForm);

