import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-card-with-label',
  templateUrl: './card-with-label.component.html',
  styleUrls: ['./card-with-label.component.css']
})
export class CardWithLabelComponent implements OnInit {
  @Input() titlesong:string;
  @Input() imagesrc:string;
  constructor() { }

  ngOnInit(): void {
  }

}
