import { Action, createReducer, on } from "@ngrx/store"
import { IUniversity } from "../shared/models/univercity.model";
import { ISearchQwery } from "../shared/models/search.model";
import { AppActions } from "./app.actions"

export interface IState{
    currentSearch: ISearchQwery,
    savedCount: number,
    universities: IUniversity[],
    savedUniversities: IUniversity[],
    currentSelected?: IUniversity,
}

const initialState: IState ={
    currentSearch: {},
    savedCount: JSON.parse(localStorage.getItem('saved')|| '[]')?.length || 0,
    universities: [],
    savedUniversities: JSON.parse(localStorage.getItem('saved')|| '[]'),
}

const exemplarReducer = createReducer(
    initialState, 
    on(AppActions.loadUniversities, (state,action)=>({
        ...state,
        currentSearch: action
    })),
    on(AppActions.loadUniversitiesSucces, (state, action)=>({
        ...state,
        universities: action.universities.map(university =>{
            let alreadySaved = state.savedUniversities.filter(savedUniversicty => savedUniversicty.name == university.name);
            return {...university, saved: !!alreadySaved.length};
        })
    })),
    on(AppActions.saveUniversity, (state, action) =>({
        ...state,
        savedUniversities: state.savedUniversities?.concat(action),
        savedCount: state.savedCount + 1,
        universities: state.universities?.map(el=> {
            return el.name === action.name ? {...el, saved: true} : el})
    })),
    on(AppActions.removeUniversity, (state, action) =>({
        ...state,
        savedUniversities: state.savedUniversities?.filter(el => el.name !== action.name),
        savedCount: state.savedCount - 1,
        universities: state.universities?.map(el=> {
            return el.name === action.name ? {...el, saved: false} : el})
    }))
)

export function reducer(state: IState | undefined, action: Action){
    return exemplarReducer(state, action);
}