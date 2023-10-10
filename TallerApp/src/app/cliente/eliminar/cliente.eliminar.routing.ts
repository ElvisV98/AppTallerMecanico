import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteEliminarPage } from './cliente.eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteEliminarPageRoutingModule {}
