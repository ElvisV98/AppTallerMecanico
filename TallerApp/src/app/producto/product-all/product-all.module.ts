import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAllPageRoutingModule } from './product-all-routing.module';

import { ProductAllPage } from './product-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAllPageRoutingModule
  ],
  declarations: [ProductAllPage]
})
export class ProductAllPageModule {}
