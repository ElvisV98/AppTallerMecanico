
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteActualizarPage } from './cliente.actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteActualizarPageRoutingModule {}
