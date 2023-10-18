import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectUsuarioPage } from './select-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: SelectUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectUsuarioPageRoutingModule {}
