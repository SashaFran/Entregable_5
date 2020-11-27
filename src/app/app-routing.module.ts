import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{LoggeadoEnglobadoComponent} from './components/loggeado/loggeado-englobado/loggeado-englobado.component';
import{NoLogginEnglobadoComponent} from './components/noLoggin/no-loggin-englobado/no-loggin-englobado.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';

const routes: Routes=[
  {path:'home-log',component:LoggeadoEnglobadoComponent},
  {path:'home',component:NoLogginEnglobadoComponent},
  {path:'iniciar-sesion',component:SesionComponent},
  {path:'registrarse',component:RegistroComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoggeadoEnglobadoComponent,NoLogginEnglobadoComponent];
