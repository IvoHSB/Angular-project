import { createAction, props } from "@ngrx/store"

const actionTypes = {
    setProfile: 'SET_PROFILE',
}

export const setProfile = createAction(actionTypes.setProfile, props<{value: any}>());
