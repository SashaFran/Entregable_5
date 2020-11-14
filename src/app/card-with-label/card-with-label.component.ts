import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-with-label',
  templateUrl: './card-with-label.component.html',
  styleUrls: ['./card-with-label.component.css']
})
export class CardWithLabelComponent implements OnInit {
  nombre:string;
  lista:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
