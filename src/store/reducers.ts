import { combineReducers } from "redux";
import * as actions from './actions'

const booksState = {
    item: [],
    isFetching: false,
    fetchError: ''
}

function books(state = booksState, action) {
    const { type, items, error } = action

    switch (type) {
        case actions.START_SEARCH:
            return {
                ...state,
                isFetching: true
            }
        case actions.SET_REQUEST_ERROR:
            return {
                ...state,
                fetchError: error,
                isFetching: false
            }
        case actions.SET_BOOKS:
            return {
                ...state,
                items,
                fetchError: null,
                isFetching: false
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({ books });

export default rootReducer