import { Component, OnInit } from '@angular/core';
import { SongInfo } from 'src/app/song-info';
@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css']
})
export class TabSelectorComponent implements OnInit {
  titulo:string = 'Mi playlist';
  array:SongInfo[] =[
    new SongInfo('1','titulo_1',"",'3:00',"artista","album","../../assets/img/songs/ab67616d00004851a9c7357101e65ee6af3c3789.jpg"),
    new SongInfo('2','titulo_2',"",'3:10',"artista","album","../../assets/img/songs/ab67616d00004851a729c9c3dec04b99d889c66f.jpg"),
    new SongInfo('1','titulo_1',"",'3:00',"artista","album","../../assets/img/songs/ab67616d00004851a9c7357101e65ee6af3c3789.jpg"),
    new SongInfo('2','titulo_2',"",'3:10',"artista","album","../../assets/img/songs/ab67616d00004851a729c9c3dec04b99d889c66f.jpg"),
    new SongInfo('1','titulo_1',"",'3:00',"artista","album","../../assets/img/songs/ab67616d00004851a9c7357101e65ee6af3c3789.jpg"),
    new SongInfo('2','titulo_2',"",'3:10',"artista","album","../../assets/img/songs/ab67616d00004851a729c9c3dec04b99d889c66f.jpg"),
    new SongInfo('1','titulo_1',"",'3:00',"artista","album","../../assets/img/songs/ab67616d00004851a9c7357101e65ee6af3c3789.jpg"),
    new SongInfo('2','titulo_2',"",'3:10',"artista","album","../../assets/img/songs/ab67616d00004851a729c9c3dec04b99d889c66f.jpg")
  ];
  constructor() { 
   

  }

  ngOnInit(): void {
  }

}
