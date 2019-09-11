import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {

  accountNumber = "12345678";
  sortCode = "12-34-56";
  balance = 639.21;

  constructor() { }

  ngOnInit() {
  }

}
