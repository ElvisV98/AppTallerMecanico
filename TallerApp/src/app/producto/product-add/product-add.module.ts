import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAddPageRoutingModule } from './product-add-routing.module';

import { ProductAddPage } from './product-add.page';
import { ReactiveFormsModule } from '@angular/forms';  // <<========
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAddPageRoutingModule,
    ReactiveFormsModule,      // <<========
    //HttpClientModule,         // <<======
  ],
  declarations: [ProductAddPage]
})
export class ProductAddPageModule {}

