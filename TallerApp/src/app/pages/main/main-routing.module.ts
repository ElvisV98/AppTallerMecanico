import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
      },
      {
        path: 'taller',
        loadChildren: () => import('./taller/taller.module').then( m => m.TallerPageModule)
      },
      {
        path: 'calendary',
        loadChildren: () => import('./calendary/calendary.module').then( m => m.CalendaryPageModule)
      },
      {
        path: 'auto',
        loadChildren: () => import('./auto/auto.module').then( m => m.AutoPageModule)
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
