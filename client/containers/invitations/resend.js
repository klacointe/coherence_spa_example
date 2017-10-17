import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InvitationsResend from 'components/invitations/resend'
import * as InvitationsActions from 'actions/invitations'

class InvitationsResendContainer extends Component {
  render() {
    return (
      <InvitationsResend
        onSubmit={this.props.invitationsActions.resend}
        initialValues={{
          id: ''
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
      invitationsActions: bindActionCreators(InvitationsActions, dispatch)
    }
  }
)(InvitationsResendContainer)
