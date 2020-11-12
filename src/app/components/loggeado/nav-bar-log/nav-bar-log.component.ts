import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-log',
  templateUrl: './nav-bar-log.component.html',
  styleUrls: ['./nav-bar-log.component.css']
})
export class NavBarLogComponent{

  constructor() { 
    console.log("Navegador loggeado funciona.");
  }

}
