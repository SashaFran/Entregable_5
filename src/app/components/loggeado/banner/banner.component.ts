import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  isShow: boolean;
  constructor( private router: Router) {
 
    
    // this.isShow = this.router.url != '/misPlaylist';
    // this.isShow = this.router.url != '/cancion';
    if ((router.url === '/miPlaylist')&&(router.url === '/cancion')) {
      this.isShow = true;
    }  else {
      this.isShow = false;
    }
    console.log(this.router.url);
    console.log("Funciona el banner");
  }

  ngOnInit(): void {
  }

}
