import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from 'components/header'
import * as SessionsActions from 'actions/sessions'
import * as RegistrationsActions from 'actions/registrations'

class HeaderContainer extends Component {
  render() {
    const { user, sessionsActions, registrationsActions } = this.props
    return (
      <Header
        user={user}
        onSignOut={sessionsActions.signOut}
        onDestroyAccount={registrationsActions.destroy}
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
      sessionsActions: bindActionCreators(SessionsActions, dispatch),
      registrationsActions: bindActionCreators(RegistrationsActions, dispatch),
    }
  }
)(HeaderContainer)
