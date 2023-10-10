import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEliminarPageRoutingModule } from './cliente.eliminar.routing';

import { ClienteEliminarPage } from './cliente.eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEliminarPageRoutingModule
  ],
  declarations: [ClienteEliminarPage]
})
export class ClienteEliminarPageModule {}
