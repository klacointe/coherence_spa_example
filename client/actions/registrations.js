import Actions from 'constants/actions'
import { push } from 'react-router-redux'

import { makeRequest }  from 'utils/api'
import { setCurrentUser } from 'actions/sessions'

export const signUp = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/registrations',
      params: { registration: values },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 201) {
          dispatch(setCurrentUser(response.user))
          dispatch(push('/'))
        }
      })
  }

export const update = (values) =>
  dispatch => {
    makeRequest({
      verb: 'put',
      path: '/api/registrations',
      data: { registration: values },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 200) {
          dispatch(setCurrentUser(response.user))
          dispatch(push('/'))
        }
      })
  }

export const destroy = () =>
  dispatch => {
    makeRequest({
      verb: 'delete',
      path: '/api/registrations',
      dispatch
    })
      .then(({response}) => {
        if (response.status === 204) {
          dispatch({ type: Actions.USER_SIGNED_OUT })
          dispatch(push('/'))
        }
      })
  }
