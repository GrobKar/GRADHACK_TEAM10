import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HandwritingComponent } from './handwriting.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [HandwritingComponent],
  exports: [HandwritingComponent]
})
export class HandwritingComponentModule {}
