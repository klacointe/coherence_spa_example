import Actions from '../constants/actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  requests: Immutable.List(),
  responses: Immutable.List(),
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.API_REQUEST:
      return state.update('requests', (r) => r.push(Immutable.fromJS(action.request)))
    case Actions.API_RESPONSE:
      return state.update('responses', (r) => r.push(Immutable.fromJS(action.response)))
    default:
      return state
  }
}
