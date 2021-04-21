import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DiscoverComponent} from './discover/discover.component';
import {TiendaComponent} from './tienda/tienda.component';
import { CasaComponent } from './casa/casa.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'venta', component: TiendaComponent },
  { path: 'casa/:id', component: CasaComponent },
  {path:'**', pathMatch:"full",redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
