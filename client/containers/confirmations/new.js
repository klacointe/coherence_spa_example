import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ConfirmationsNew from 'components/confirmations/new'
import * as ConfirmationsActions from 'actions/confirmations'

class ConfirmationsNewContainer extends Component {
  render() {
    return (
      <ConfirmationsNew
        onSubmit={this.props.confirmationsActions.create}
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
      confirmationsActions: bindActionCreators(ConfirmationsActions, dispatch)
    }
  }
)(ConfirmationsNewContainer)
