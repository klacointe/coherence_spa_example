import React, {Component} from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { bindActionCreators } from 'redux'

import HeaderContainer from 'containers/header'
import ApiRequests from 'containers/api_requests'
import * as SessionsActions from 'actions/sessions'

class Layout extends Component {
  componentDidMount() {
    this.props.sessionsActions.fetchCurrentUser()
  }

  render() {
    const { route: { routes } } = this.props
    return (
      <div>
        <HeaderContainer />
        <ApiRequests />
        <main>
          {renderRoutes(routes)}
        </main>
      </div>
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
)(Layout)
