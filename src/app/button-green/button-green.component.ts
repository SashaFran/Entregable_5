import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-green',
  templateUrl: './button-green.component.html',
  styleUrls: ['./button-green.component.css']
})
export class ButtonGreenComponent implements OnInit {
  name:string;
  value:string;
  constructor() {
    this.name="id";
    this.value="button";
   }

  ngOnInit(): void {
  }

}
