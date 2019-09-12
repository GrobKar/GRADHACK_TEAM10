import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { FormListItemComponent } from './form-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [FormListItemComponent],
  exports: [FormListItemComponent]
})
export class FormListItemComponentModule {}
