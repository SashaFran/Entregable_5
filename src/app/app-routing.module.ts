import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{LoggeadoEnglobadoComponent} from './components/loggeado/loggeado-englobado/loggeado-englobado.component';
import{NoLogginEnglobadoComponent} from './components/noLoggin/no-loggin-englobado/no-loggin-englobado.component';

const routes: Routes=[
  {path:'home-log',component:LoggeadoEnglobadoComponent},
  {path:'home',component:NoLogginEnglobadoComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoggeadoEnglobadoComponent,NoLogginEnglobadoComponent];
