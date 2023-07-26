import { createReducer, on } from "@ngrx/store";
import { setProfile } from "../actions/profile.action";


export interface profileState {
    profile: any;
}

export const initialState: profileState = {
    profile: null,
}

export const reducer = createReducer(
    initialState,
    on(setProfile, (state, action) => {
        return {...state, profile: action.value}
    }),
)