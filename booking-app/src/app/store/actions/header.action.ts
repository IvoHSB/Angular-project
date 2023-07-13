import { createAction, props } from "@ngrx/store"


const actionTypes = {
    changeIsMainHeader: 'CHANGE_IS_MAIN_HEADER'
}

export const changeIsMainHeader = createAction(actionTypes.changeIsMainHeader, props<{value: boolean}>());