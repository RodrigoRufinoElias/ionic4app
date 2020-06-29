import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { Store, select } from '@ngrx/store';

import { Person } from './models/person';
import { AppState, selectPeople } from './store';
import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './person/person.actions';
import * as fromPeopleSelector from './person/person.selectors';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.page.html',
  styleUrls: ['./ngrx.page.scss'],
})
export class NgrxPage implements OnInit {

  people$: Observable<Person[]>;
  pCount$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Aciona o Action de recuperação
    this.store.dispatch(new PersonAll());

    // Forma mais básica para popular um objeto com Estados (Seletor)
    // this.people$ = this.store.pipe(select('people'));

    // Seletor 2.0 (Para Reducer sem Entity)
    // this.people$ = this.store.select(selectPeople);

    // Seletor 2.0 (Para Reducer com Entity)
    this.people$ = this.store.select(fromPeopleSelector.selectAll);
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    };

    // Aciona o Action de criação
    this.store.dispatch(new PersonNew({person}));
  }

  update(p: Person) {
    p = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: p._id
    };

    // Aciona o Action de Update
    // Para Reducer com Entity
    this.store.dispatch(new PersonUpdate({id: p._id, changes: p}));

    // Para Reducer sem Entity
    // this.store.dispatch(new PersonUpdate({person: p}));
  }

  delete(p: Person) {
    // Aciona o Action de Delete
    this.store.dispatch(new PersonDelete({id: p._id}));
  }
}
