import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{LoggeadoEnglobadoComponent} from './components/loggeado/loggeado-englobado/loggeado-englobado.component';
import{NoLogginEnglobadoComponent} from './components/noLoggin/no-loggin-englobado/no-loggin-englobado.component';
/** patata */
import { TabSelectorComponent } from './tab-selector/tab-selector.component';
import { CardWithLabelComponent } from './card-with-label/card-with-label.component';

const routes: Routes=[
  {path:'home-log',component:LoggeadoEnglobadoComponent},
  {path:'home',component:NoLogginEnglobadoComponent},
  {path:'prueba',component:TabSelectorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoggeadoEnglobadoComponent,NoLogginEnglobadoComponent,CardWithLabelComponent];
