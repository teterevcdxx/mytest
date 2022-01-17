import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "./app.reducer";

export namespace AppSelectors {
    export const state = createFeatureSelector<IState>("appStore");
    export const count = createSelector(state, (state) => state.savedCount);
    export const univercities = createSelector(state, (state) => state.universities);
    export const savedUnivercities = createSelector(state, (state) => state.savedUniversities);
    export const currentSearched = createSelector(state, (state) => state.currentSearch);
}