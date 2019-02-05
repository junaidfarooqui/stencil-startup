import { combineReducers } from "redux";
import * as actions from './actions'

const booksState = {
    item: [],
    isFetching: false,
    fetchError: ''
}