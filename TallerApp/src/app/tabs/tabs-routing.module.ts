import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'productos',
        loadChildren: () => import('./../productos/productos.module').then( m => m.ProductosPageModule)
      },

      {
        path: 'reserva',
        loadChildren: () => import('./../reserva/reserva.module').then( m => m.ReservaPageModule)
      },

      {
        path: 'calendario',
        loadChildren: () => import('./../calendario/calendario.module').then( m => m.CalendarioPageModule)
      },

      {
        path: 'usuarios',
        loadChildren: () => import('./../usuarios/usuarios.module').then( m => m.UsuariosPageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
