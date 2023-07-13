import { ActionReducerMap, createReducer, on } from "@ngrx/store"
import { changeIsMainHeader, changePage } from "../actions/header.action"


export interface headerState {
    isMainHeader: boolean;
    page: String
}

export const initialState: headerState = {
    isMainHeader: true,
    page: 'Home'
}

export const reducer = createReducer(
    initialState,
    on(changeIsMainHeader, (state, action) => {
        return {...state, isMainHeader: action.value}
    }),
    on(changePage, (state, action) => {
        return {...state, page: action.value}
    })
)


