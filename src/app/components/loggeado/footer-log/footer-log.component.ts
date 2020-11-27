import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-log',
  templateUrl: './footer-log.component.html',
  styleUrls: ['./footer-log.component.css']
})
export class FooterLogComponent{
  fullHearts: string[];
  numbers: number[] = [1,2,3,4,5];
  noVoted: boolean = true;

  constructor() { 
  }

  vote( number ){
    this.fullHearts = ["fa fa-heart-o","fa fa-heart-o","fa fa-heart-o","fa fa-heart-o","fa fa-heart-o"];
    for ( var i = 0; i<number; i++) {
      this.fullHearts[i] = "fa fa-heart";
    }
    this.noVoted = false;
  }
}