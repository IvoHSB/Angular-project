import { createAction, props } from "@ngrx/store"

const actionTypes = {
    setUser: 'SET_USER',
    setUserDetailsId: 'SET_USER_DETAILS_ID'
}

export const setUser = createAction(actionTypes.setUser, props<{value: any}>());
export const setUserDetailsId = createAction(actionTypes.setUserDetailsId, props<{value: any}>());
