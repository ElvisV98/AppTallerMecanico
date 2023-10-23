import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioAddPage } from './usuario-add.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioAddPageRoutingModule {}
