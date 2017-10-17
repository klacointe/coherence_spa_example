import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RegistrationsNew from 'components/registrations/new'
import * as RegistrationsActions from 'actions/registrations'

class RegistrationsEditContainer extends Component {
  render() {
    const { user } = this.props
    if (!user) { return null }
    return (
      <RegistrationsNew
        onSubmit={this.props.registrationsActions.update}
        initialValues={{
          name: user.get('name'),
          email: user.get('email'),
          password: ''
        }}
      />
    )
  }
}

export default connect(
  (state, props) => {
    return {
      user: state.getIn(['session', 'currentUser'])
    }
  },
  (dispatch, props) => {
    return {
      registrationsActions: bindActionCreators(RegistrationsActions, dispatch)
    }
  }
)(RegistrationsEditContainer)
