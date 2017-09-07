import React from 'react';
import { graphql } from 'react-apollo';

import { InputRow, Errors } from 'components/inputs';
import { CHANGE_PASSWORD_MUTATION } from 'api/mutations';

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword1: '',
      newPassword2: '',
      success: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, success: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { oldPassword, newPassword1, newPassword2, } = this.state;
    this.props.mutate({ variables: { o: oldPassword, n1: newPassword1, n2: newPassword2 } })
      .then(resp => {
        if ( resp.success ) {
          this.setState({
            success: true,
            errors: {}
          });
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
      oldPassword,
      newPassword1,
      newPassword2,
      success,
      errors = {}
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        { success ? <p>Password change successful</p> : null }
        <Errors errors={errors['__all__']} />
        <InputRow
          name='Old Password'
          value={oldPassword}
          type='password'
          handler={this.handleChange}
          errors={errors.oldPassword}
          id='password-oldPassword-input'
          inputName='oldPassword'
        />
        <InputRow
          name='Password'
          value={newPassword1}
          type='password'
          handler={this.handleChange}
          errors={errors.newPassword1}
          id='password-password1-input'
          inputName='newPassword1'
        />
        <InputRow
          name='Password (Verify)'
          value={newPassword2}
          type='password'
          handler={this.handleChange}
          errors={errors.newPassword2}
          id='password-password2-input'
          inputName='newPassword2'
        />
        <div>
          <button>Change Password</button>
        </div>
      </form>
    );
  }
}

export default graphql(CHANGE_PASSWORD_MUTATION)(ChangePasswordForm);
