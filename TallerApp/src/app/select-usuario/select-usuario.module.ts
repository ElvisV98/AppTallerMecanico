import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectUsuarioPageRoutingModule } from './select-usuario-routing.module';

import { SelectUsuarioPage } from './select-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectUsuarioPageRoutingModule
  ],
  declarations: [SelectUsuarioPage]
})
export class SelectUsuarioPageModule {}
