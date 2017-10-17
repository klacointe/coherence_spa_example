import { push } from 'react-router-redux'

import { makeRequest }  from 'utils/api'

export const create = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/confirmations',
      params: { confirmation: values },
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
      verb: 'get',
      path: `/api/confirmations/${values.get('token')}/edit`,
      dispatch
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(push('/'))
        }
      })
  }

