import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormListItemComponent } from './form-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [FormListItemComponent],
  exports: [FormListItemComponent]
})
export class FormListItemComponentModule {}
