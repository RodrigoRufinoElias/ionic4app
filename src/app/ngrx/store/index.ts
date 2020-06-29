import { ActionReducerMap, createSelector } from '@ngrx/store';

import { Person } from './../models/person';
import * as fromPersonReducer from '../person/person.reducer';

// Estados da aplicação
export interface AppState {
    // Para Reducer com Entity
    people: fromPersonReducer.PeopleState;

    // Para Reducer sem Entity
    // people: Person[];
}

// "Link" da Interface dos estados com seus respectivos Reducers
export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
}

// Seletor 2.0 - Para popular o objeto na tela principal (Para Reducer sem Entity)
export const selectPeople = (state: AppState) => state.people;