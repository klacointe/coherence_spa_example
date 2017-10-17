import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class InvitationsNew extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'invitations-new'
})(InvitationsNew)
