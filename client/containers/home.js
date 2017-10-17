import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        Homepage
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      user: state.getIn(['session', 'currentUser'])
    }
  }
)(App)
