import Actions from 'constants/actions'
import { push } from 'react-router-redux'

import { makeRequest }  from 'utils/api'

export const signIn = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/sessions',
      params: {
        session: values
      },
      dispatch
    })
      .then(({response, json}) => {
        if (response.status === 201) {
          dispatch(setCurrentUser(json.user))
          dispatch(push('/'))
        }
      })
  }

export const signOut = () =>
  dispatch => {
    makeRequest({
      verb: 'delete',
      path: '/api/sessions',
      dispatch
    })
      .then(({response}) => {
        dispatch({ type: Actions.USER_SIGNED_OUT })
        dispatch(push('/sign_in'))
      })
  }

export const fetchCurrentUser = () =>
  dispatch => {
    makeRequest({
      verb: 'get',
      path: '/api/users/me',
      dispatch
    })
      .then(({response, json}) => {
        if (response.status === 200) {
          dispatch(setCurrentUser(json.user))
        }
      })
  }

export const setCurrentUser = (user) => {
  return {
    type: Actions.CURRENT_USER,
    user: user
  }
}

export const unlock = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/unlocks',
      params: {
        unlock: values,
      },
      dispatch
    })
      .then(({response}) => {
        dispatch(setCurrentUser(response.user))
        dispatch(push('/'))
      })
  }
