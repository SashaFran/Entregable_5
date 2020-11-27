import { Component, OnInit } from '@angular/core';
import { SongInfo } from 'src/app/song-info';

@Component({
  selector: 'app-mis-playlist',
  templateUrl: './mis-playlist.component.html',
  styleUrls: ['./mis-playlist.component.css']
})
export class MisPlaylistComponent implements OnInit {
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
  constructor() {
    console.log("Mis PlayLists funciona")
   }

  ngOnInit(): void {
  }

}
