import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAllPageRoutingModule } from './usuario-all-routing.module';

import { UsuarioAllPage } from './usuario-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAllPageRoutingModule
  ],
  declarations: [UsuarioAllPage]
})
export class UsuarioAllPageModule {}
