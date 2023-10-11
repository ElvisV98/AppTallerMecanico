import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },   
  
  
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },

  {
    path: 'usuario-add',
    loadChildren: () => import('./usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-all',
    loadChildren: () => import('./usuario/usuario-all/usuario-all.module').then( m => m.UsuarioAllPageModule)
  },
  {
    path: 'usuario-detail',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },
  {
    path: 'usuario-edit',
    loadChildren: () => import('./usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'usuario-list',
    loadChildren: () => import('./usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
