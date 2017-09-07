import React from 'react';
import { graphql } from 'react-apollo';

import { InputRow, Errors } from 'components/inputs';
import Spinner from 'components/Spinner';
import { LOGIN_MUTATION } from 'api/mutations';
import { USER_QUERY } from 'api/queries';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
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
        password: this.state.password
      },
      update: (store, { data: { loginUser } }) => {
        const data = store.readQuery({query: USER_QUERY });
        const { success, user } = loginUser;
        if (success) {
          data.user = user;
          store.writeQuery({ query: USER_QUERY, data });
        }
      }
    })
      .then(resp => {
        const { success, errors, user } = resp.data.loginUser;
        this.setState({ loading: false })
        if ( success ) {
          this.context.curi.history.push(this.props.next || '/');
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
      password,
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
          id='login-username-input'
          inputName='username'
        />
        <InputRow
          name='Password'
          value={password}
          type='password'
          handler={this.handleChange}
          errors={errors.password}
          id='login-password-input'
          inputName='password'
        />
        <div>
          <button>Login</button>
          { loading ? <Spinner /> : null }
        </div>
      </form>
    );
  }
}

LoginForm.contextTypes = {
  curi: React.PropTypes.object
};

export default graphql(LOGIN_MUTATION, {
  refetchQueries: ['user']
})
(LoginForm);