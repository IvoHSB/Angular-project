import { ActionReducerMap } from '@ngrx/store';
import * as headerReducers from './header.reducer';

export interface ElementsState {
	header: headerReducers.headerState;
}

export const reducers: ActionReducerMap<ElementsState> = {
    header: headerReducers.reducer
}