import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**single components*/
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';
import { CardScrollHorizontalComponent } from './card-scroll-horizontal/card-scroll-horizontal.component';
import { ButtonGreenComponent } from './button-green/button-green.component';
import { InputTextComponent } from './input-text/input-text.component';
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
import { NoLogginEnglobadoComponent } from './components/noLoggin/no-loggin-englobado/no-loggin-englobado.component';
import { LoggeadoEnglobadoComponent } from './components/loggeado/loggeado-englobado/loggeado-englobado.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanesCardComponent } from './planes-card/planes-card.component';
import { InicioMobileComponent } from './inicio-mobile/inicio-mobile.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CardWithLabelComponent,
    CardScrollHorizontalComponent,
    ButtonGreenComponent,
    InputTextComponent,
    NavBarLogComponent,
    FooterLogComponent,
    NavBarComponent,
    FooterComponent,
    TabSelectorComponent,
    BannerComponent,
    CancionComponent,
    UserComponent,
    NotificacionesComponent,
    MisPlaylistComponent,
    LoggeadoEnglobadoComponent,
    NoLogginEnglobadoComponent,
    PlanesComponent,
    PlanesCardComponent,
    InicioMobileComponent,
    RegistroComponent,
    SesionComponent,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragScrollModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }