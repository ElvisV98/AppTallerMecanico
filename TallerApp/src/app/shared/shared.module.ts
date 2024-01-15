import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { HeaderComponent } from './components/header/header.component';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    AddUpdateProductComponent,
    UserMenuComponent
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    AddUpdateProductComponent,
    UserMenuComponent,
    ReactiveFormsModule,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
  
})
export class SharedModule { }
