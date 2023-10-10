import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteAgregarPage } from './cliente.agregar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAgregarPageRoutingModule {}
