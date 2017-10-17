import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from 'reducers/index'

const composeEnhancers = (typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = (history) =>
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  )

export default function configureStore(initialState, history) {
  return createStore(rootReducer, initialState, enhancer(history))
}
