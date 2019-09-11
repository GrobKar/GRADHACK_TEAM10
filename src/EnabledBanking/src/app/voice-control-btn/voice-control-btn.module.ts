import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { VoiceControlBtnComponent } from './voice-control-btn.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [VoiceControlBtnComponent],
  exports: [VoiceControlBtnComponent]
})
export class VoiceControlBtnComponentModule {}
