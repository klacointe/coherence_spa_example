import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class PasswordsEdit extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="reset_password_token">Reset Password Token</label>
          <Field name="reset_password_token" component="input" type="reset_password_token" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <Field name="password_confirmation" component="input" type="password_confirmation" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'passwords-edit'
})(PasswordsEdit)
