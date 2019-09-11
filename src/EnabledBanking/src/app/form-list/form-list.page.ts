import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

  forms = [
    {
      id: 1,
      name: "Change of Name Form",
      cat: "Amend Personal Details",
      desc: "Fill in this form for when you have changed your legal name, such as after marriage.",
      img: "../assets/stock/passports.jpg"
    },
    {
      id: 2,
      name: "Additional Cardholder Request",
      cat: "Credit Card",
      desc: "Fill in this form to request an additional cardholder for your corporate credit card.",
      img: "../assets/stock/debit-card.jpg"
    },
    {
      id: 3,
      name: "Cancel Credit Card Direct Debit",
      cat: "Credit Card",
      desc: "Fill in this form to cancel a direct debit towards your credit card bill",
      img: "../assets/stock/direct-debit.jpg"
    },
    {
      id: 4,
      name: "Personal Representatives Closure Form",
      cat: "Bereavement",
      desc: "Fill in this form to begin the legal process following a bereavement",
      img: "../assets/stock/bereavement.jpg"
    },
    {
      id: 5,
      name: "Direct Debit Form",
      cat: "Credit Card",
      desc: "Fill in this form to set up a direct debit towards your monthly credit card bill",
      img: "../assets/stock/direct-debit.jpg"
    },
    {
      id: 6,
      name: "Cash ISA Smart Form",
      cat: "Savings",
      desc: "Fill in this form to apply for a Cash ISA",
      img: "../assets/stock/isa.jpg"
    }
  ]

  constructor(public location:Location) { }

  ngOnInit() {
  }

}
