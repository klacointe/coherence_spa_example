import Actions from '../constants/actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  currentUser: null
})

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.CURRENT_USER:
      return state.set('currentUser', Immutable.Map(action.user))
    case Actions.USER_SIGNED_OUT:
      return initialState
    default:
      return state
  }
}
