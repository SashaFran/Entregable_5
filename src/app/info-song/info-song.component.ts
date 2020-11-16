import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-song',
  templateUrl: './info-song.component.html',
  styleUrls: ['./info-song.component.css']
})
export class InfoSongComponent implements OnInit {
  nro:string;
  title:string;
  album:string;
  duracion:string;

  constructor() { 
    this.nro="1";
    this.title="titulo_1";
    this.album="album_1";
    this.duracion= "2:30";
  }


  ngOnInit(): void {
  }

}
