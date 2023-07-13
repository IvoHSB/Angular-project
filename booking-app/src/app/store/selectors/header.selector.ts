import { createFeatureSelector, createSelector } from "@ngrx/store";
import { headerState } from "../reducers/header.reducer";


const headerSelector = createFeatureSelector<headerState>('header');

export const isMainHeader = createSelector(headerSelector, s => s.isMainHeader);
export const page = createSelector(headerSelector, s => s.page);
