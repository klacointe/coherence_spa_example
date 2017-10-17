import React from 'react'
import { hydrate } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '../routes'

export default class App extends React.Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </Provider>
    )
  }
}
