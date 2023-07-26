import { createReducer, on } from "@ngrx/store";
import { setUser, setUserDetailsId } from "../actions/auth.action"


export interface authState {
    user: any;
    userDetailsId: string;
}

export const initialState: authState = {
    user: null,
    userDetailsId: '',
}

export const reducer = createReducer(
    initialState,
    on(setUser, (state, action) => {
        return {...state, user: action.value}
    }),
    on(setUserDetailsId, (state, action) => {
        return {...state, userDetailsId: action.value}
    }),
)