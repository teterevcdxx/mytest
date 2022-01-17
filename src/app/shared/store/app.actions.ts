import { Action, createAction, props } from "@ngrx/store";
import { IGetUnivercityData, ISearchQuery } from "../models/search.model";
import { IUniversity } from "../models/univercity.model";

export enum UniversitiesActions {
    SAVE_SEARCH_QUERY = '[List page] Save search query',
    SAVE_UNIVERSITY = '[List page] Save university',
    REMOVE_UNIVERSITY = '[List page] remove university',   
    LOAD_UNIVERSITIES = '[List page] Load universities',
    LOAD_UNIVERSITIES_SUCCESS = '[List page] Load universities success',
    LOAD_UNIVERSITIES_ERROR = '[List page] Load universities error',   
    EXPORT_BOOKMARKS = '[List page] Export bookmarks'
}

export namespace AppActions{
    export const saveSearchQuery = createAction(UniversitiesActions.SAVE_SEARCH_QUERY, props<ISearchQuery>())
    export const saveUniversity = createAction(UniversitiesActions.SAVE_UNIVERSITY, props<IUniversity>());
    export const loadUniversities = createAction(UniversitiesActions.LOAD_UNIVERSITIES, props<ISearchQuery>());
    export const loadUniversitiesSucces = createAction(UniversitiesActions.LOAD_UNIVERSITIES_SUCCESS, props<{universities: any[]}>());
    export const loadUniversitiesError = createAction(UniversitiesActions.LOAD_UNIVERSITIES_ERROR, props<{message: any}>());
    export const removeUniversity = createAction(UniversitiesActions.REMOVE_UNIVERSITY, props<IUniversity>());
    export const exportBookmarks = createAction(UniversitiesActions.EXPORT_BOOKMARKS);
}   
