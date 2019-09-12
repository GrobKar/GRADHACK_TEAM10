import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormPage } from './form.page';

import { HandwritingComponentModule } from '../handwriting/handwriting.module';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandwritingComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
