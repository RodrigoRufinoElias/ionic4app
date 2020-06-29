import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromPersonActions from './person.actions';
import { Person } from '../models/person';

// INÍCIO REDUCER COM "ENTITY"

export interface PeopleState extends EntityState<Person> {

}

// Coleção de funções do Entity para manipulação de dados
export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
    selectId: (p: Person) => p._id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});

export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
    switch(action.type) {
        case fromPersonActions.PersonActionTypes.PERSON_NEW:
            return peopleAdapter.addOne(action.payload.person, state);

        case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
            return peopleAdapter.updateOne(
                {
                    id: action.payload.id,
                    changes: action.payload.changes
                },
                state
            );

        case fromPersonActions.PersonActionTypes.PERSON_DELETE:
            return peopleAdapter.removeOne(action.payload.id, state);

        default:
            return state;
    }
}

// FIM REDUCER COM "ENTITY"

// INÍCIO REDUCER SEM "ENTITY"

// export const initialState: Person[] = [];

// export function reducer(state = initialState, action: fromPersonActions.PersonActions) {
//     switch(action.type) {
//         case fromPersonActions.PersonActionTypes.PERSON_ALL:
//             return state;

//         case fromPersonActions.PersonActionTypes.PERSON_NEW:
//             return state.concat([action.payload.person]);

//         case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
//             let people = state.slice();
//             let i = people.findIndex(p => p._id == action.payload.person._id);

//             if (i>=0)
//                 people[i] = action.payload.person;

//             return people;

//         case fromPersonActions.PersonActionTypes.PERSON_DELETE:
//             return state.filter(p => p._id != action.payload.id);

//         default:
//             return state;
//     }
// }

// FIM REDUCER SEM "ENTITY"