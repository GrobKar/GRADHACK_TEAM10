import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormListPage } from './form-list.page';

import { FormListItemComponentModule } from '../form-list-item/form-list-item.module';

const routes: Routes = [
  {
    path: '',
    component: FormListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormListItemComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormListPage]
})
export class FormListPageModule {}
