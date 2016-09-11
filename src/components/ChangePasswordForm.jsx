import React from 'react';

import { InputRow, Errors } from './inputs';
import { changePassword } from '../api/auth';

const ChangePasswordForm = React.createClass({
  getInitialState: function() {
    return {
      old_password: '',
      new_password1: '',
      new_password2: '',
      success: false
    }
  },
  handleOldPassword: function(event) {
    this.setState({
      old_password: event.target.value,
      success: false
    });
  },
  handlePassword1: function(event) {
    this.setState({
      new_password1: event.target.value,
      success: false
    });
  },
  handlePassword2: function(event) {
    this.setState({
      new_password2: event.target.value,
      success: false
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    const {
      old_password,
      new_password1,
      new_password2,
    } = this.state;
    changePassword(old_password, new_password1, new_password2)
      .then(resp => resp.json())
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
  },
  render: function() {
    const {
      old_password,
      new_password1,
      new_password2,
      success,
      errors = {}
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        { success ? <p>Password change successful</p> : null }
        <Errors errors={errors['__all__']} />
        <InputRow name='Old Password'
                value={old_password}
                type='password'
                handler={this.handleOldPassword}
                errors={errors.old_password}
                id='password-old_password-input' />
        <InputRow name='Password'
                value={new_password1}
                type='password'
                handler={this.handlePassword1}
                errors={errors.new_password1}
                id='password-password1-input' />
        <InputRow name='Password (Verify)'
                value={new_password2}
                type='password'
                handler={this.handlePassword2}
                errors={errors.new_password2}
                id='password-password2-input' />
        <div>
          <button>Change Password</button>
        </div>
      </form>
    );
  }
});

export default ChangePasswordForm;