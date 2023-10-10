
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteActualizarPageRoutingModule } from './cliente.actualizar.routing';

import { ClienteActualizarPage } from './cliente.actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteActualizarPageRoutingModule
  ],
  declarations: [ClienteActualizarPage]
})
export class ClienteActualizarPageModule {}
