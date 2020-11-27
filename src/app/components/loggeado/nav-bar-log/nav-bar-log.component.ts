import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-bar-log',
  templateUrl: './nav-bar-log.component.html',
  styleUrls: ['./nav-bar-log.component.css'
],
  encapsulation: ViewEncapsulation.None
})
export class NavBarLogComponent{

  constructor() {
    console.log("Navegador loggeado funciona.");
  }

}
