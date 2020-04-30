import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full',
  },
  { 
    
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { path: 'cliente/:clientId', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
