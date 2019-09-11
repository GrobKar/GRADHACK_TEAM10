import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  greeting = "Morning";

  constructor() {}

  ngOnInit() {
    let time = new Date();
    if(time.getHours() < 12) {
      this.greeting = "Morning";
    } else if(time.getHours() < 18) {
      this.greeting = "Afternoon";
    } else {
      this.greeting = "Evening";
    }
  }

}
