import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavBarLogComponent} from './components/loggeado/nav-bar-log/nav-bar-log.component';
import {NavBarComponent} from './components/noLoggin/nav-bar/nav-bar.component';
import { FooterLogComponent } from './components/loggeado/footer-log/footer-log.component';
import { FooterComponent } from './components/noLoggin/footer/footer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarLogComponent,
    FooterLogComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
