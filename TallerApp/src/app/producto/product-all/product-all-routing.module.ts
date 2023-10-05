import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAllPage } from './product-all.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAllPageRoutingModule {}
