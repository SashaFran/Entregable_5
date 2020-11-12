import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterLogComponent } from './footer-log/footer-log.component';
import { NavBarLogComponent } from './nav-bar-log/nav-bar-log.component';


@NgModule({
  declarations: [
    FooterLogComponent,
    NavBarLogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterLogComponent,
    NavBarLogComponent
  ]
})
export class LoggeadoModule { }
