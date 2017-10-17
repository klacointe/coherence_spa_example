import Actions from '../constants/actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  list: undefined,
  details: Immutable.Map()
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.RECEIVE_ORGANIZATIONS:
      return state.set('list', Immutable.fromJS(action.organizations))
    case Actions.RECEIVE_ORGANIZATION:
      return state.setIn(['details', action.organization.reference], Immutable.Map(action.organization))
    default:
      return state
  }
}
