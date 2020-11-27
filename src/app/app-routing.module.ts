import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{LoggeadoEnglobadoComponent} from './components/loggeado/loggeado-englobado/loggeado-englobado.component';
import{NoLogginEnglobadoComponent} from './components/noLoggin/no-loggin-englobado/no-loggin-englobado.component';
/** patata */
import { TabSelectorComponent } from './tab-selector/tab-selector.component';

/** Dai(?*/ 
import { CancionComponent } from './components/cancion/cancion.component';
import { MisPlaylistComponent } from './components/mis-playlist/mis-playlist.component';

const routes: Routes=[
  {
    path: '',
    component: LoggeadoEnglobadoComponent,
  children:[
    {path: 'cancion', component: CancionComponent},
    {path: 'misPlaylist', component: MisPlaylistComponent}
  ]
  },
  
  {path:'home-log', component:LoggeadoEnglobadoComponent},
  {path:'home', component:NoLogginEnglobadoComponent},
  {path:'prueba', component:TabSelectorComponent},
  
];

@NgModule({
  imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoggeadoEnglobadoComponent,NoLogginEnglobadoComponent,CardWithLabelComponent,CancionComponent, MisPlaylistComponent];
