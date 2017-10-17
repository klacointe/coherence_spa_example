import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

class ConfirmationsEdit extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="token">Token</label>
          <Field name="token" component="input" type="token" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'confirmations-edit'
})(ConfirmationsEdit)
