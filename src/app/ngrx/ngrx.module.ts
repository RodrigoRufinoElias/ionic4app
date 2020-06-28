import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { NgrxPage } from './ngrx.page';
import { PersonComponent } from './person/person.component';
import { appReducers } from './store';

const routes: Routes = [
  {
    path: '',
    component: NgrxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [
    NgrxPage,
    PersonComponent
  ]
})
export class NgrxPageModule {}
