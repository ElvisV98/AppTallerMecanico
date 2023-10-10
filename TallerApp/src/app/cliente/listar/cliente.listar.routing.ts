import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarClientePage } from './cliente.listar.page';

const routes: Routes = [
  {
    path: '',
    component: ListarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPageRoutingModule {}
