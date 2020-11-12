import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';

import { AppComponent } from './app.component';
import { NavBarLogComponent } from './components/loggeado/nav-bar-log/nav-bar-log.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarLogComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
