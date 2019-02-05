export const START_SEARCH = 'START_SEARCH'
const startSearch = () => ({ type: START_SEARCH })

export const SET_REQUEST_ERROR = 'SET_REQUEST_ERROR'
const setRequestError = () => ({ type: SET_REQUEST_ERROR, error })