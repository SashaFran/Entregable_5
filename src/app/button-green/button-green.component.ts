import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-green',
  templateUrl: './button-green.component.html',
  styleUrls: ['./button-green.component.css']
})
export class ButtonGreenComponent implements OnInit {
  name:string;
  action:string;
  constructor() {
    this.name="button";
    this.action="";
   }

  ngOnInit(): void {
  }

}
