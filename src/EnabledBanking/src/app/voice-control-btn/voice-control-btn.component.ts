import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voice-control-btn',
  templateUrl: './voice-control-btn.component.html',
  styleUrls: ['./voice-control-btn.component.scss'],
})
export class VoiceControlBtnComponent implements OnInit {

    color = null;
    fill = null;
    @Input() properties:Array = ["primary", true];

  constructor() { }

  ngOnInit() {
    if(this.properties[1]) {
      this.fill = "solid";
    } else {
      this.fill = "outline";
    }
    this.color = this.properties[0];
  }

}
