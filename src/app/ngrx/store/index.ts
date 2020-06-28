import { ActionReducerMap } from '@ngrx/store';

import { Person } from './../models/person';
import * as fromPersonReducer from '../person/person.reducer';

// Estados da aplicação
export interface AppState {
    people: Person[];
}

// "Link" da Interface dos estados com seus respectivos Reducers
export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
}