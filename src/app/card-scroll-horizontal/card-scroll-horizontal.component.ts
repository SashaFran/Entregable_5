import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-scroll-horizontal',
  templateUrl: './card-scroll-horizontal.component.html',
  styleUrls: ['./card-scroll-horizontal.component.css']
})
export class CardScrollHorizontalComponent implements OnInit {
  arraySongs:any[];
  constructor() { 
    this.arraySongs=[
      [{'image':"../../assets/img/image.png"},{'titlesong':'titulo Cancion'}],
      [{'image':"../../assets/img/image.png"},{'titlesong':'titulo Cancion'}],
      [{'image':"../../assets/img/image.png"},{'titlesong':'titulo Cancion'}],
      [{'image':"../../assets/img/image.png"},{'titlesong':'titulo Cancion'}],
      [{'image':"../../assets/img/image.png"},{'titlesong':'titulo Cancion'}],
    ];
  }

  ngOnInit(): void {
  }

}
