import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';

/**single components*/
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';
import { CardScrollHorizontalComponent } from './card-scroll-horizontal/card-scroll-horizontal.component';
import { ButtonGreenComponent } from './button-green/button-green.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InfoSongComponent } from './info-song/info-song.component';
/**group */
import {NavBarLogComponent} from './components/loggeado/nav-bar-log/nav-bar-log.component';
import {NavBarComponent} from './components/noLoggin/nav-bar/nav-bar.component';
import { FooterLogComponent } from './components/loggeado/footer-log/footer-log.component';
import { FooterComponent } from './components/noLoggin/footer/footer.component';
import { BannerComponent } from './components/loggeado/banner/banner.component';
import { CancionComponent } from './components/cancion/cancion.component';

/**angular material modules */
import { TabSelectorComponent } from './tab-selector/tab-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './components/interactivos/user/user.component';
import { NotificacionesComponent } from './components/interactivos/notificaciones/notificaciones.component';
import { MisPlaylistComponent } from './components/mis-playlist/mis-playlist.component';




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
    TabSelectorComponent,
    BannerComponent,
    CancionComponent,
    UserComponent,
    NotificacionesComponent,
    MisPlaylistComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragScrollModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
