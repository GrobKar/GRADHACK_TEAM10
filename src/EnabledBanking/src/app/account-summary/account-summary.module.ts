import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountSummaryComponent } from './account-summary.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [AccountSummaryComponent],
  exports: [AccountSummaryComponent]
})
export class AccountSummaryComponentModule {}
