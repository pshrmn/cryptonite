import React from 'react';
import { graphql } from 'react-apollo';
import { Curious } from '@curi/react';

import { InputRow, Errors } from 'components/inputs';
import Spinner from 'components/Spinner';
import { SIGNUP_MUTATION } from 'api/mutations';
import { USER_QUERY, ALL_CHALLENGES_QUERY } from 'api/queries';

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
    this.props.signupUser({
      variables: {
        username: this.state.username,
        password1: this.state.password1,
        password2: this.state.password2
      },
      update: (dataProxy, { data: { signupUser } }) => {
        const data = dataProxy.readQuery({query: USER_QUERY });
        const { success, user } = signupUser;
        if (success) {
          data.user = user;
          dataProxy.writeQuery({ query: USER_QUERY, data });
        }
      }
    })
      .then(resp => {
        this.setState({ loading: false });
        const { success, errors, user } = resp.data.signupUser;
        if ( success ) {
          this.props.router.history.push(this.props.next || '/');
        } else {
          const errorsObject = errors.reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
          }, {});
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

const ComposedForm = graphql(SIGNUP_MUTATION, {
  name: 'signupUser',
  options: {
    refetchQueries: [
     { query: ALL_CHALLENGES_QUERY }
    ]
  }
})(SignupForm);

export default props => (
  <Curious>
    {({ router }) => (
      <ComposedForm {...props} router={router} />
    )}
  </Curious>
);
