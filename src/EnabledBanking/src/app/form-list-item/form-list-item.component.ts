import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-list-item',
  templateUrl: './form-list-item.component.html',
  styleUrls: ['./form-list-item.component.scss'],
})
export class FormListItemComponent implements OnInit {

  @Input() formData;

  constructor() { }

  ngOnInit() {  }

}
