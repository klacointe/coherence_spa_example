import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InvitationsCreateUser from 'components/invitations/create_user'
import * as InvitationsActions from 'actions/invitations'

class InvitationsCreateUserContainer extends Component {
  render() {
    return (
      <InvitationsCreateUser
        onSubmit={this.props.invitationsActions.createUser}
        initialValues={{
          token: '',
          name: '',
          email: '',
          password: ''
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
)(InvitationsCreateUserContainer)
