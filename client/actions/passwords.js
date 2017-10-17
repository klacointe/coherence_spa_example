import { push } from 'react-router-redux'

import { makeRequest }  from 'utils/api'

export const create = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/passwords',
      params: { password: values },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 201) {
          dispatch(push('/'))
        }
      })
  }

export const update = (values) =>
  dispatch => {
    makeRequest({
      verb: 'put',
      path: `/api/passwords/${values.get('reset_password_token')}`,
      params: { password: values },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 200) {
          dispatch(push('/'))
        }
      })
  }

