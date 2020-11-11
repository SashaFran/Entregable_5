import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
