import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-playlist',
  templateUrl: './mis-playlist.component.html',
  styleUrls: ['./mis-playlist.component.css']
})
export class MisPlaylistComponent implements OnInit {

  constructor() {
    console.log("Mis PlayLists funciona")
   }

  ngOnInit(): void {
  }

}
