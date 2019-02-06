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
                fetchError:
            }
    }
}