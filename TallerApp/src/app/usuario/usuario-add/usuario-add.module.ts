import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAddPageRoutingModule } from './usuario-add-routing.module';

import { UsuarioAddPage } from './usuario-add.page';
import { ReactiveFormsModule } from '@angular/forms';  // <<========
//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAddPageRoutingModule,
    ReactiveFormsModule,      // <<========
    //HttpClientModule,         // <<======
  ],
  declarations: [UsuarioAddPage]
})
export class UsuarioAddPageModule {}
