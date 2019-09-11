import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

  forms = [
    {
      name: "Change of Name Form",
      desc: "Amend Personal Details",
      img: "../assets/stock/passports.jpg"
    },
    {
      name: "Additional Cardholder Request",
      desc: "Credit Card",
      img: "../assets/stock/debit-card.jpg"
    },
    {
      name: "Cancel Credit Card Direct Debit",
      desc: "Credit Card",
      img: "../assets/stock/direct-debit.jpg"
    },
    {
      name: "Personal Representatives Closure Form",
      desc: "Bereavement",
      img: "../assets/stock/bereavement.jpg"
    },
    {
      name: "Direct Debit Form",
      desc: "Credit Card",
      img: "../assets/stock/direct-debit.jpg"
    },
    {
      name: "Cash ISA Smart Form",
      desc: "Savings",
      img: "../assets/stock/isa.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
