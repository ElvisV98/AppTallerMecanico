import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioEditPageRoutingModule } from './usuario-edit-routing.module';

import { UsuarioEditPage } from './usuario-edit.page';
import { ReactiveFormsModule } from '@angular/forms';  // <<========

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,      // <<========
    UsuarioEditPageRoutingModule
  ],
  declarations: [UsuarioEditPage]
})
export class UsuarioEditPageModule {}
