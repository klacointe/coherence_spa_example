import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class PasswordsEdit extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="token">Token</label>
          <Field name="token" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'invitations-create-user'
})(PasswordsEdit)
