import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UnlocksNew from 'components/unlocks/new'
import * as SessionsActions from 'actions/sessions'
import Immutable from 'immutable'

class UnlocksNewContainer extends Component {
  render() {
    return (
      <UnlocksNew
        onSubmit={this.props.sessionsActions.unlock}
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
)(UnlocksNewContainer)
