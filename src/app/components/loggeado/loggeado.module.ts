import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterLogComponent } from './footer-log/footer-log.component';
import { NavBarLogComponent } from './nav-bar-log/nav-bar-log.component';
import { LoggeadoEnglobadoComponent } from './loggeado-englobado/loggeado-englobado.component';


@NgModule({
  declarations: [
    FooterLogComponent,
    NavBarLogComponent,
    LoggeadoEnglobadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterLogComponent,
    NavBarLogComponent,
    LoggeadoEnglobadoComponent
  ]
})
export class LoggeadoModule { }
