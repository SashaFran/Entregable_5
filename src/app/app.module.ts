import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';
import { CardScrollHorizontalComponent } from './card-scroll-horizontal/card-scroll-horizontal.component';
import { ButtonGreenComponent } from './button-green/button-green.component';
import { InputTextComponent } from './input-text/input-text.component';

import { InfoSongComponent } from './info-song/info-song.component';
import {NavBarLogComponent} from './components/loggeado/nav-bar-log/nav-bar-log.component';
import {NavBarComponent} from './components/noLoggin/nav-bar/nav-bar.component';
import { FooterLogComponent } from './components/loggeado/footer-log/footer-log.component';
import { FooterComponent } from './components/noLoggin/footer/footer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { PlanesComponent } from './planes/planes.component';
import { PlanesCardComponent } from './planes-card/planes-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardWithLabelComponent,
    CardScrollHorizontalComponent,
    ButtonGreenComponent,
    InputTextComponent,
    InfoSongComponent,
    routingComponents,
    NavBarLogComponent,
    FooterLogComponent,
    NavBarComponent,
    FooterComponent,
    PlanesComponent,
    PlanesCardComponent,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragScrollModule,
    AppRoutingModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
