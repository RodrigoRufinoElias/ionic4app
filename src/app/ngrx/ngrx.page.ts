import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/person';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.page.html',
  styleUrls: ['./ngrx.page.scss'],
})
export class NgrxPage implements OnInit {

  people$: Observable<Person[]>;

  constructor() { }

  ngOnInit() {
  }

  addNew() {

  }

  update(p: Person){

  }

  delete(p: Person){

  }
}
