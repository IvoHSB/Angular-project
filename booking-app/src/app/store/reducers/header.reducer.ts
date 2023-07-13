import { ActionReducerMap, createReducer, on } from "@ngrx/store"
import { changeIsMainHeader } from "../actions/header.action"


export interface headerState {
    isMainHeader: boolean;
}

export const initialState: headerState = {
    isMainHeader: false
}

export const reducer = createReducer(
    initialState,
    on(changeIsMainHeader, (state, action) => {
        return {...state, isMainHeader: action.value}
    })
)


