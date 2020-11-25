import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  isShow: boolean;

  constructor(
    private router: Router
  ) {
    console.log(this.router.url);
    console.log("Funciona el banner");
    this.isShow = this.router.url != '/cancion';
    this.isShow = this.router.url != '/misPlaylist';

  }

  ngOnInit(): void {
  }

}
