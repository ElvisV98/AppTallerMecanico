import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioAllPage } from './usuario-all.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioAllPageRoutingModule {}
