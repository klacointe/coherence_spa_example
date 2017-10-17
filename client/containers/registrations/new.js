import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RegistrationsNew from 'components/registrations/new'
import * as RegistrationsActions from 'actions/registrations'

class RegistrationsNewContainer extends Component {
  render() {
    return (
      <RegistrationsNew
        onSubmit={this.props.registrationsActions.signUp}
        initialValues={{
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
      registrationsActions: bindActionCreators(RegistrationsActions, dispatch)
    }
  }
)(RegistrationsNewContainer)
