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
    path: 'product-detail/:idProducto',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },

  {
    path: 'product-detail',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },

  {
    path: 'product-edit/:idProducto',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
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
    path: 'usuario-detail/:id',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },

  {
    path: 'usuario-detail',
    loadChildren: () => import('./usuario/usuario-detail/usuario-detail.module').then( m => m.UsuarioDetailPageModule)
  },

  {
    path: 'usuario-edit/:id',
    loadChildren: () => import('./usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
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
    path: 'select-usuario',
    loadChildren: () => import('./select-usuario/select-usuario.module').then( m => m.SelectUsuarioPageModule)
  },

  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },

 
  {
    path: 'localizacion',
    loadChildren: () => import('./localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  },

 
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },


  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },

 
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },


  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },

 
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
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
