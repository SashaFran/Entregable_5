
import { Component, OnInit, Input } from '@angular/core';
import { SongInfo } from 'src/app/song-info';
@Component({
  selector: 'app-card-with-label',
  templateUrl: './card-with-label.component.html',
  styleUrls: ['./card-with-label.component.css']
})
export class CardWithLabelComponent implements OnInit {
  @Input() item:SongInfo;
  constructor() { 
   /*  this.imagesrc="../../assets/img/image.png";
    this.titlesong="titulo cancion"; */
  }

  ngOnInit(): void {
  }

}