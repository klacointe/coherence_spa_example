import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InvitationsNew from 'components/invitations/new'
import * as InvitationsActions from 'actions/invitations'

class InvitationsNewContainer extends Component {
  render() {
    return (
      <InvitationsNew
        onSubmit={this.props.invitationsActions.create}
        initialValues={{
          email: '',
          name: ''
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
)(InvitationsNewContainer)
