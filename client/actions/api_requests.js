import Actions from 'constants/actions'

export const newApiRequest = (request) => {
  return {
    type: Actions.API_REQUEST,
    request
  }
}

export const newApiResponse = (response) => {
  return {
    type: Actions.API_RESPONSE,
    response
  }
}
