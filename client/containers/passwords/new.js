import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PasswordsNew from 'components/passwords/new'
import * as PasswordsActions from 'actions/passwords'

class PasswordsNewContainer extends Component {
  render() {
    return (
      <PasswordsNew
        onSubmit={this.props.passwordsActions.create}
        initialValues={{
          email: ''
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
)(PasswordsNewContainer)
