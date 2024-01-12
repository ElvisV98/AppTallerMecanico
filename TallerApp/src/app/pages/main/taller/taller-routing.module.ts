import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerPage } from './taller.page';

const routes: Routes = [
  {
    path: '',
    component: TallerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerPageRoutingModule {}
