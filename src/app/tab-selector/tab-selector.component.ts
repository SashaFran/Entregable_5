import { Component, OnInit } from '@angular/core';
import { SongInfo } from 'src/app/song-info';
import {cloneDeep} from 'lodash';
@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css']
})
export class TabSelectorComponent implements OnInit {
  titulo:string[] = ['Lo más escuchado','Sugerencias para ti','Ultimos Agregados','Nuestas Playlist','Pasar el rato'];
  array:SongInfo[] =[
    new SongInfo('1','Ayer me llamo mi ex',"",'3:00',"artista","album","./assets/img/songs/ayer.png"),
    new SongInfo('2','Stay with me',"",'3:10',"artista","album","./assets/img/songs/bird.png"),
    new SongInfo('3','BlurryFace',"",'3:00',"artista","album","./assets/img/songs/blurry.png"),
    new SongInfo('4','Colores',"",'3:10',"artista","album","./assets/img/songs/colores.png"),
    new SongInfo('5','CryBaby',"",'3:00',"artista","album","./assets/img/songs/cry.png"),
    new SongInfo('6','That Bitch!',"",'3:10',"artista","album","./assets/img/songs/thatbitch.png"),
    new SongInfo('7','Thousand',"",'3:00',"artista","album","./assets/img/songs/thousand.png"),
    new SongInfo('8','Trench',"",'3:10',"artista","album","./assets/img/songs/trench.png")
  ];
  lista:SongInfo[]=[
    new SongInfo('9',"Correr","","80:00","","","./assets/img/list/correr.png"),
    new SongInfo('10',"Jugar","","80:00","","","./assets/img/list/jugar.png"),
    new SongInfo('11',"Bailar","","80:00","","","./assets/img/list/bailar.png"),
  ];
  podcast:SongInfo[]=[
    new SongInfo('12',"40 cartas","","60:00","","","./assets/img/podcast/cartas.png"),
    new SongInfo('13',"Hasta las manos","","30:00","","","./assets/img/podcast/hasta.png"),
    new SongInfo('14',"Ya te lo googleo","","120:00","","","./assets/img/podcast/googleo.png"),
    new SongInfo('15',"Gente enojada","","20:00","","","./assets/img/podcast/gente.png"),
    new SongInfo('16',"A mimir","","90:00","","","./assets/img/podcast/mimir.png"),
    new SongInfo('17',"Horoscopo","","90:00","","","./assets/img/podcast/horoscopo.png"),
    new SongInfo('18',"A mover ","","90:00","","","./assets/img/podcast/mover.png")
  ];
  reverseArray:SongInfo[];
  reversePodcast:SongInfo[];
  constructor() { 
   

  }

  ngOnInit(): void {
    this.reverseArray=cloneDeep(this.array);
    this.reverseArray.reverse();
    this.reversePodcast=cloneDeep(this.podcast);
    this.reversePodcast.reverse();
  }

}
