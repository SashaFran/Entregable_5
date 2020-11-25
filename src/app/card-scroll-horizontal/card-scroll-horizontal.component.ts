import { Component, Input, OnInit } from '@angular/core';
import { SongInfo } from 'src/app/song-info';
@Component({
  selector: 'app-card-scroll-horizontal',
  templateUrl: './card-scroll-horizontal.component.html',
  styleUrls: ['./card-scroll-horizontal.component.css']
})
export class CardScrollHorizontalComponent implements OnInit {
  
  @Input() titulo_lista:string = "titulo_lista_auto";
  @Input() arraySongs:SongInfo[];
  
  constructor() { 
  }
  ngOnInit(): void {
    
  }

}
