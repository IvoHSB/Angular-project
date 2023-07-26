import { ActionReducerMap } from '@ngrx/store';
import * as headerReducers from './header.reducer';
import * as authReducers from './auth.reducer';

export interface ElementsState {
	header: headerReducers.headerState;
    auth: authReducers.authState;
}

export const reducers: ActionReducerMap<ElementsState> = {
    header: headerReducers.reducer,
    auth: authReducers.reducer
}