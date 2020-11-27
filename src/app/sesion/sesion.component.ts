import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigateByUrl("/home-log");
  }

}
