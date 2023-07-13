import { createAction, props } from "@ngrx/store"


const actionTypes = {
    changeIsMainHeader: 'CHANGE_IS_MAIN_HEADER',
    changePage: 'CHANGE_PAGE'
}

export const changeIsMainHeader = createAction(actionTypes.changeIsMainHeader, props<{value: boolean}>());
export const changePage = createAction(actionTypes.changePage, props<{value: String}>());
