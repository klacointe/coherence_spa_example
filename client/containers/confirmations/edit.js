import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ConfirmationsEdit from 'components/confirmations/edit'
import * as ConfirmationsActions from 'actions/confirmations'

class ConfirmationsEditContainer extends Component {
  render() {
    return (
      <ConfirmationsEdit
        onSubmit={this.props.confirmationsActions.update}
        initialValues={{
          token: ''
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
)(ConfirmationsEditContainer)
