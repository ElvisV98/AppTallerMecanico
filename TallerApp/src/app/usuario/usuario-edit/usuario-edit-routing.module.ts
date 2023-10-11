import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioEditPage } from './usuario-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioEditPageRoutingModule {}
