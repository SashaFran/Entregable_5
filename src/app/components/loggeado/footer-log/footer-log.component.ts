import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-log',
  templateUrl: './footer-log.component.html',
  styleUrls: ['./footer-log.component.css']
})
export class FooterLogComponent{

  constructor() { 
    console.log("Footer loggeado funciona");
  }


}
