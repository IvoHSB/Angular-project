import { createFeatureSelector, createSelector } from "@ngrx/store";
import { profileState } from "../reducers/profile.reducer";


const profileSelector = createFeatureSelector<profileState>('auth');

export const profile = createSelector(profileSelector, s => s.profile);
