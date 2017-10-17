import fetch from 'isomorphic-fetch'
import https from 'https'

import { newApiRequest, newApiResponse } from 'actions/api_requests'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const buildHeaders = () => {
  return defaultHeaders
}

const url = (path) => `http://localhost:4000${path}`

const handleResponse = (response, dispatch) => {
  if (response.headers.get('Content-Type') && response.headers.get('Content-Type').includes("application/json")) {
    return response.json().then(json => {
      dispatch(newApiResponse({
        status: response.status,
        json
      }))
      return {response, json: json}
    })
  } else {
    return response.text().then(text => {
      dispatch(newApiResponse({
        status: response.status,
        text
      }))
      return {response, text: text}
    })
  }
}

export const makeRequest = ({verb, path, params, dispatch}) => {
  dispatch(newApiRequest({verb, path, params}))
  switch(verb) {
    case 'delete':
      return httpDelete({dispatch, path, params})
    case 'post':
      return httpPost({dispatch, path, params})
    case 'put':
      return httpPut({dispatch, path, params})
    default:
      return httpGet({dispatch, path})
  }
}

export const httpGet = ({path, dispatch}) =>
  fetch(url(path), {
    headers: buildHeaders(),
    credentials: 'include'
  }).then(resp => handleResponse(resp, dispatch))

export const httpPost = ({path, params, dispatch}) => {
  const body = JSON.stringify(params)
  return fetch(url(path), {
    method: 'post',
    headers: buildHeaders(),
    body: body,
    credentials: 'include'
  }).then(resp => handleResponse(resp, dispatch))
}

export const httpPut = ({path, params, dispatch}) => {
  const body = JSON.stringify(params)
  return fetch(url(path), {
    method: 'put',
    headers: buildHeaders(),
    body: body,
    credentials: 'include'
  }).then(resp => handleResponse(resp, dispatch))
}

export const httpDelete = ({path, params, dispatch}) =>
  fetch(url(path), {
    method: 'delete',
    headers: buildHeaders(),
    credentials: 'include'
  }).then(resp => handleResponse(resp, dispatch))
