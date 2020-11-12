import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';
import { LoggeadoModule } from './components/loggeado/loggeado.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule,
    LoggeadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
