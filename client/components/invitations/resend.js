import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class InvitationsResend extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="id">Id</label>
          <Field name="id" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'invitations-resend'
})(InvitationsResend)
