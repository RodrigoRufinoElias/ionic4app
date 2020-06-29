import { Action } from '@ngrx/store';

import { Person } from '../models/person';

// Enum pra mapear cada ação
export enum PersonActionTypes {
    PERSON_ALL = '[PERSON_ALL] Get all peaple',
    PERSON_NEW = '[PERSON_NEW] Add a new person',
    PERSON_UPDATE = '[PERSON_UPDATE] update a person',
    PERSON_DELETE = '[PERSON_DELETE] delete a person'
}

// Classes que irão implementar as ações
export class PersonAll implements Action {
    readonly type = PersonActionTypes.PERSON_ALL;
}

export class PersonNew implements Action {
    readonly type = PersonActionTypes.PERSON_NEW;

    constructor(public payload: {person: Person}) {}
}

export class PersonUpdate implements Action {
    readonly type = PersonActionTypes.PERSON_UPDATE;

    // Para Reducer com Entity
    constructor(public payload: {id: string, changes: Partial<Person>}) {}

    // Para Reducer sem Entity
    // constructor(public payload: {person: Person}) {}
}

export class PersonDelete implements Action {
    readonly type = PersonActionTypes.PERSON_DELETE;

    constructor(public payload: {id: string}) {}
}

// Simplificar a chamada para as classes
export type PersonActions = PersonAll | PersonNew | PersonUpdate | PersonDelete;