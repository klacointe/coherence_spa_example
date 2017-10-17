import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class ConfirmationsNew extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'confirmations-new'
})(ConfirmationsNew)
