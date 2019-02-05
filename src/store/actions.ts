export const START_SEARCH = 'START_SEARCH'
const startSearch = () => ({ type: START_SEARCH })

export const SET_REQUEST_ERROR = 'SET_REQUEST_ERROR'
const setRequestError = () => ({ type: SET_REQUEST_ERROR, error })

export const SET_BOOKS = 'SET_BOOKS'
const setBooks = () => ({ type: SET_BOOKS, items })