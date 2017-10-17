import { push } from 'react-router-redux'

import { makeRequest }  from 'utils/api'

export const create = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/invitations',
      params: { invitation: values },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 201) {
          dispatch(push('/'))
        }
      })
  }

export const createUser = (values) =>
  dispatch => {
    makeRequest({
      verb: 'post',
      path: '/api/invitations/create',
      params: {
        token: values.get('token'),
        user: values
      },
      dispatch
    })
      .then(({response}) => {
        if (response.status === 201) {
          dispatch(push('/'))
        }
      })
  }

export const resend = (values) =>
  dispatch => {
    makeRequest({
      verb: 'get',
      path: `/api/invitations/${values.get('id')}/resend`,
      dispatch
    })
      .then(({response}) => {
        if (response.status === 200) {
          dispatch(push('/'))
        }
      })
  }

