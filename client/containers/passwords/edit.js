import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PasswordsEdit from 'components/passwords/edit'
import * as PasswordsActions from 'actions/passwords'

class PasswordsEditContainer extends Component {
  render() {
    return (
      <PasswordsEdit
        onSubmit={this.props.passwordsActions.update}
        initialValues={{
          reset_password_token: '',
          password: '',
          password_confirmation: ''
        }}
      />
    )
  }
}

export default connect(
  (state, props) => {
    return {}
  },
  (dispatch, props) => {
    return {
      passwordsActions: bindActionCreators(PasswordsActions, dispatch)
    }
  }
)(PasswordsEditContainer)
