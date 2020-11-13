import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NoLogginEnglobadoComponent } from './no-loggin-englobado/no-loggin-englobado.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NoLogginEnglobadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    NoLogginEnglobadoComponent
  ]
})
export class NoLogginModule { }
