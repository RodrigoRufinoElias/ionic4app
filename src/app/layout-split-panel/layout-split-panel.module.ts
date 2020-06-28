import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutSplitPanelPage } from './layout-split-panel.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutSplitPanelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutSplitPanelPage]
})
export class LayoutSplitPanelPageModule {}
