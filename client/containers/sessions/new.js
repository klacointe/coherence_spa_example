import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SessionsNew from 'components/sessions/new'
import * as SessionsActions from 'actions/sessions'
import Immutable from 'immutable'

class SessionsNewContainer extends Component {
  render() {
    return (
      <SessionsNew
        onSubmit={this.props.sessionsActions.signIn}
        initialValues={Immutable.fromJS({
          email: '',
          password: ''
        })}
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
      sessionsActions: bindActionCreators(SessionsActions, dispatch)
    }
  }
)(SessionsNewContainer)
