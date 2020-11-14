import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NoLogginModule } from './components/noLoggin/no-loggin.module';
import { LoggeadoModule } from './components/loggeado/loggeado.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppComponent } from './app.component';
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';
import { CardScrollHorizontalComponent } from './card-scroll-horizontal/card-scroll-horizontal.component';



@NgModule({
  declarations: [
    AppComponent,
    CardWithLabelComponent,
    CardScrollHorizontalComponent
  ],
  imports: [
    BrowserModule,
    NoLogginModule,
    LoggeadoModule,
    MatCardModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
