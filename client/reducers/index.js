import { combineReducers } from 'redux-immutable'
import { routeReducer } from 'redux-simple-router'
import { reducer as formReducer } from 'redux-form/immutable'

import session from './session'
import apiRequests from './api_requests'

export default combineReducers({
  routing: routeReducer,
  form: formReducer,
  session,
  apiRequests
})
