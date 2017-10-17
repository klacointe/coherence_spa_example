import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createHashHistory'
import Immutable from 'immutable'
import configureStore from './store/index.js'
import App from 'components/app'

const history = createHistory()
const store = configureStore(Immutable.fromJS({}), history)

ReactDOM.hydrate(
  <App store={store} history={history} />,
  document.getElementById('root')
)
