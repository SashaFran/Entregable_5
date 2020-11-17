import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';
import { LoggeadoModule } from './components/loggeado/loggeado.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppComponent } from './app.component';
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';
import { CardScrollHorizontalComponent } from './card-scroll-horizontal/card-scroll-horizontal.component';
import { ButtonGreenComponent } from './button-green/button-green.component';
import { InputTextComponent } from './input-text/input-text.component';

import { AppRoutingModule } from './app-routing.module';
import { InfoSongComponent } from './info-song/info-song.component';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    CardWithLabelComponent,
    CardScrollHorizontalComponent,
    ButtonGreenComponent,
    InputTextComponent,
    InfoSongComponent,
    TabSelectorComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule,
    LoggeadoModule,
    MatCardModule,
    DragScrollModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
