import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css'],
  styles: [
    `
    p {
      padding: 20px;
      background-color: rgb(130, 238, 173);
      border: 1px solid green;
    }
    `
  ]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
