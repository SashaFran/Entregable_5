import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  name:string;
  id:string;
  constructor() { 
    this.name="Nombre input";
    this.id="idinput";
  }

  ngOnInit(): void {
  }

}
