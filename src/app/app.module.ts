import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';
import { LoggeadoModule } from './components/loggeado/loggeado.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule,
    LoggeadoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
