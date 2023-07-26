import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authState } from "../reducers/auth.reducer";


const authSelector = createFeatureSelector<authState>('auth');

export const user = createSelector(authSelector, s => s.user);
export const userDetailsId = createSelector(authSelector, s => s.userDetailsId);
